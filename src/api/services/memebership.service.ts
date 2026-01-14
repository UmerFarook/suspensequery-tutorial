import {readJSONFile, writeJSONFile} from "../utils/readFiles";
import { Request, Response } from "express";
import {MemberTypes} from "../types/member.types";
import User from "../db/dbSchema";

const MEMBERS_JSON_FILE ='members.data.json';

export const getAllMembers = async (request: Request, response:Response) =>{
    try {
        const { id } = request.params;
        const {dataFromDb:getDataFromMongoDb, existingIds:extractIDsOnly} = await retrieveThData();

        const {query} = request.query;

        if(query){
            const getDataOnQuery  =  await getDataByQuery(query as string);
            return response.status(200).json(getDataOnQuery);

        }
        if (!id) {
            return response.status(200).json(getDataFromMongoDb);
        }



        const numericId = Number(id);
        if (Number.isNaN(numericId)) {
            return response.status(400).json({ message: "Invalid id parameter" });
        }

        if (!extractIDsOnly.includes(numericId)) {
            return response.status(404).json({ message: "User Id not found" });
        }

       // const member = getDataFromMongoDb.filter((m: MemberTypes) => Number(m.userId) === numericId);
       // return response.status(200).json(member);
    } catch (err) {
        return response.status(500).json({ message: "Internal server error" });
    }
 }



export const updateMembers = async (request:Request,response:Response) =>{
    try {
        const requestBody = request.body;
        if (!requestBody || typeof requestBody !== 'object') {
            return response.status(400).json({ message: 'Invalid request body' });
        }

        const {dataFromDb:fileData}  = await retrieveThData()

        const lastEntry = fileData[fileData.length - 1];
        const lastId = lastEntry ? Number(lastEntry.userId) : 0;
        const newId = Number.isNaN(lastId) ? 1 : lastId + 1;

        const newMember: MemberTypes = { ...requestBody, userId: newId };
        const updatedFileData = [...fileData, newMember];
        await User.create(newMember);
      //  await writeJSONFile(MEMBERS_JSON_FILE, updatedFileData);

        return response.status(201).json(newMember);
    } catch (err) {
        return response.status(500).json({ message: 'Internal server error' });
    }
}
export const deleteMember = async (request:Request, response:Response) =>{
    try {

        const maybeId = request.params?.id ?? request.body?.userId;

        if (maybeId === undefined || maybeId === null) {
            return response.status(400).json({ message: 'Missing userId to delete' });
        }

        const numericId = Number(maybeId);
        if (Number.isNaN(numericId)) {
            return response.status(400).json({ message: 'Invalid userId' });
        }


        const {dataFromDb:fileData, existingIds:existingIDs} = await retrieveThData()

        if (!existingIDs.includes(numericId)) {
            return response.status(404).json({ message: 'User Id not found' });
        }
        const deleteMembers = await  User.deleteOne({userId:numericId})
        // const updatedMembersList = fileData.filter((member: MemberTypes) => Number(member.userId) !== numericId);
        // await writeJSONFile(MEMBERS_JSON_FILE, updatedMembersList);

        return response.status(200).json(deleteMembers);
    } catch (err) {
        return response.status(500).json({ message: 'Internal server error' });
    }

}

const fileDataJSON = async (MEMBERS_JSON_FILE: string): Promise<{ fileData: MemberTypes[]; existingIDs: number[] }> => {
    const raw = await readJSONFile(MEMBERS_JSON_FILE);


    const fileData: MemberTypes[] = Array.isArray(raw) ? (raw as MemberTypes[]) : [];

    const existingIDs = Array.from(
        new Set(
            fileData
                .map((member: MemberTypes) => {
                    const number = Number((member as any).userId);
                    return Number.isNaN(number) ? null : number;
                })
                .filter((number): number is number => number !== null)
        )
    ).sort((a, b) => a - b);

    return { fileData, existingIDs };
};

const retrieveThData = async ()=>{
    const getDataFromMongoDb = await User.find();
    const getExistingIDs =await User.find({},{'userId':1})
    const extractIDsOnly = getExistingIDs.map(idSet => idSet.userId)
    return {dataFromDb:getDataFromMongoDb,existingIds:extractIDsOnly}
}

const getDataByQuery = async (query :string)=>{
    return User.find({name: { $regex: `^${query}`,$options: 'i'}});
}