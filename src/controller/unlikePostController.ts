import { Request, Response } from "express";
import UnLikePostBusiness from "../business/unLikePostBusiness";


export default class UnLikePostController{

    async unLike (req:Request,res:Response) : Promise<void>{
        try {

            const unlikePostBusiness = new UnLikePostBusiness()

            const token = req.headers.authorization
            const idPost = req.params.id

            const result = await unlikePostBusiness.unLikePost(token,idPost)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}