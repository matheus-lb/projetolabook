import { Request, Response } from "express";
import LoginBusiness from "../business/loginBusiness";
import UserBusiness from "../business/UserBusiness";


export default class LoginController{

    async login (req:Request,res:Response) : Promise<void>{
        const {email,password} = req.body

        try {
            const loginBusiness = new LoginBusiness()
            
    
            const token =await loginBusiness.login(email,password)
            res.status(200).send(token)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}