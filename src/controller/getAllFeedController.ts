import { Request, Response } from "express";
import GetAllFeedBusiness from "../business/getAllFeedBusiness";


export default class GetAllFeedController{

    async getFeed (req:Request,res:Response) : Promise<void>{
        try {

            const getAllFeedBusiness = new GetAllFeedBusiness()
            const type = req.params.type

            const result = await getAllFeedBusiness.getFeed(type)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}