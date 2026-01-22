import {Router} from "express";
import {deleteMember, getAllMembers, updateMembers} from "../services/memebership.service";
import {checkBody} from "../middleware/middleware.ts";

const membersRoute =Router();

membersRoute.get('/',getAllMembers)
membersRoute.get('/:id',checkBody,getAllMembers)
membersRoute.put('/',updateMembers)
membersRoute.delete('/',deleteMember)

export default membersRoute