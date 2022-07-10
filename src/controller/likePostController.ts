import { Request, Response } from "express";
import GetFeedBusiness from "../business/getFeedBusiness";
import LikePostBusiness from "../business/LikePostBusiness";


export default class LikePostController{

    async doLike (req:Request,res:Response) : Promise<void>{
        try {

            const likePostBusiness = new LikePostBusiness()

            const token = req.headers.authorization
            const idPost = req.params.id

            const result = await likePostBusiness.createLikePost(token,idPost)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}