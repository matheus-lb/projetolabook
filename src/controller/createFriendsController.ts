import { Request, Response } from "express";
import CreateFriendsBusiness from "../business/createFriendsBusiness";


export default class CreateFriendsController{

    async createFriend (req:Request,res:Response) : Promise<void>{
        try {

            const createFriendBusiness = new CreateFriendsBusiness()

            const token = req.headers.authorization
            const idFriend = req.params.id

            const result = await createFriendBusiness.createFriend(token,idFriend)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}