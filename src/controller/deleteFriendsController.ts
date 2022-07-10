import { Request, Response } from "express";
import CreateFriendsBusiness from "../business/createFriendsBusiness";
import DeleteFriendsBusiness from "../business/deleteFriendsBusiness";


export default class DeleteFriendsController{

    async deleteFriend (req:Request,res:Response) : Promise<void>{
        try {

            const deleteFriendBusiness = new DeleteFriendsBusiness()

            const token = req.headers.authorization
            const idFriend = req.params.id

            const result = await deleteFriendBusiness.deleteFriend(token,idFriend)

            res.status(201).send(result)
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}