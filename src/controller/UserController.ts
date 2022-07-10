import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";


export default class UserController{

    async signup (req:Request,res:Response) : Promise<void>{
        const {name,email,password} = req.body

        try {
            const userBusiness = new UserBusiness()
            
    
            const token =await userBusiness.createUser(name,email,password)
            res.status(200).send(token)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}