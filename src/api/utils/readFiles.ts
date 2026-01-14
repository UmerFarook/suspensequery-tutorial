import fs from "fs/promises";
import path from "node:path";


export const writeJSONFile = async (fileName:string,payload:unknown)=>{
    const pathToMembersFile = path.join('src','db',fileName)
    return fs.writeFile(pathToMembersFile,JSON.stringify(payload,null,2),"utf-8")
}

export const readJSONFile = async (fileName:string)=>{
    const pathToFile= path.join('src','db',fileName)
    const fileData  = await fs.readFile(pathToFile,"utf-8");
    return JSON.parse(fileData);
}