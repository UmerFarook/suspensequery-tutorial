import {Router} from "express";
import {deleteMember, getAllMembers, updateMembers} from "../services/memebership.service";

const membersRoute =Router();

membersRoute.get('/',getAllMembers)
membersRoute.get('/:id',getAllMembers)
membersRoute.put('/',updateMembers)
membersRoute.delete('/',deleteMember)

export default membersRoute