import { Request, Response } from "express";
import GetPostIdBusiness from "../business/getPostIdBusiness";
import inputGetPostIdBusinessDTO from "../types/inputGetPostIdBusinessDTO";


export default class GetPostIdController{

    async getPost (req:Request,res:Response) : Promise<void>{
        try {

            const getPostId = new GetPostIdBusiness()

            const token = req.headers.authorization
            const id = req.params.id

            const input : inputGetPostIdBusinessDTO ={
                token,
                id
            }

            console.log(input)

            const result = await getPostId.getPost(input)
        
            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}