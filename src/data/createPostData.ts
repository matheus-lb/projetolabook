import createPostDataDTO from "../types/createPostDataDTO";
import BaseDataBase from "./BaseDataBase";


export default class CreatePostData extends BaseDataBase{


    async createPost (data:createPostDataDTO):Promise<any>{
        await this.connection.raw(`
            INSERT INTO Posts_labook (id,description,photo,date,type,user_id)
            values ('${data.id}','${data.description}','${data.photo}','${data.date}','${data.type}','${data.userId}')
        `)

        return {result:'post criado com sucesso'}
    }
}