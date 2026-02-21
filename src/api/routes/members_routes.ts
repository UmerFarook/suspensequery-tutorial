import {Router} from "express";
import {deleteMember, getAllMembers, retrieveThData, updateMembers} from "../services/memebership.service";
import {checkBody} from "../middleware/middleware.ts";
import {paginatedData} from "../middleware/paginatedData.ts";

const membersRoute =Router();

membersRoute.get('/',paginatedData,(req,res:any)=>{
  console.log(res.paginatedData || '')
    return res.json(res.paginatedData)
})
membersRoute.get('/:id',checkBody,getAllMembers)
membersRoute.put('/',updateMembers)
membersRoute.delete('/',deleteMember)

export default membersRoute