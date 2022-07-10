import createPostDataDTO from "../types/createPostDataDTO";
import BaseDataBase from "./BaseDataBase";


export default class UnLikePostData extends BaseDataBase{


    async unLike (idUser : string , idPost :string):Promise<any>{
        await this.connection.raw(`
                DELETE FROM Likes_labook
                WHERE post_id = '${idPost}'
                AND user_id = '${idUser}';
            
            `)

        return {result:'like excluido com sucesso'}
    }

    async verifyLike (idUser:string , idPost :string):Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Likes_labook
            WHERE post_id = '${idPost}'
            AND user_id = '${idUser}';
        `)

        return result[0][0]
    }


}