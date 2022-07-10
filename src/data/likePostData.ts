import createPostDataDTO from "../types/createPostDataDTO";
import BaseDataBase from "./BaseDataBase";


export default class LikePostData extends BaseDataBase{


    async doLike (idUser : string , idPost :string):Promise<any>{
        await this.connection.raw(`
            INSERT INTO Likes_labook (post_id,user_id)
            values ('${idPost}','${idUser}')
            
            `)

        return {result:'like criado com sucesso'}
    }

    async verifyLike (idUser:string , idPost :string):Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Likes_labook
            WHERE post_id = '${idPost}'
            AND user_id = '${idUser}';
        `)

        return result[0][0]
    }

    async verifyPost (idPost :string):Promise<any>{


        const result = await this.connection.raw(`
            SELECT * FROM Posts_labook
            WHERE id = '${idPost}';
        `)


        return result[0][0]
    }
}