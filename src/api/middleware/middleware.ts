import { Request, Response, NextFunction } from "express";
export const checkBody = (req:Request, res:Response,next: any)=>{
    res.setHeader("Cache-Control", "no-store");
    console.log(Object.entries(req.params))
next()

}