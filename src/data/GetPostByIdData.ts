import BaseDataBase from "./BaseDataBase";


export default class GetPostById extends BaseDataBase{


    async getPostbyId (idPost:string):Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Posts_labook
            WHERE id = '${idPost}'
        `)
        return result[0]
    }
}