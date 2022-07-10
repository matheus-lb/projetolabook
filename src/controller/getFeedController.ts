import { Request, Response } from "express";
import GetFeedBusiness from "../business/getFeedBusiness";


export default class GetFeedController{

    async getFeed (req:Request,res:Response) : Promise<void>{
        try {

            const getFeedBusiness = new GetFeedBusiness()

            const token = req.headers.authorization

            const result = await getFeedBusiness.getFeed(token)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}