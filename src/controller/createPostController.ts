import { Request, Response } from "express";
import CreatePostBusiness from "../business/createPostBusiness";
import inputPostBusinessDTO from "../types/inputPostBusinessDTO";


export default class CreatePostController{

    async createPost (req:Request,res:Response) : Promise<void>{
        try {

            const createPostbusiness = new CreatePostBusiness()

            const token = req.headers.authorization
            const {photo,description,type} = req.body
            
            const data : inputPostBusinessDTO = {
                token,
                photo,
                description,
                type
            }

            const result = await createPostbusiness.createPost(data)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}