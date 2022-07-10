import BaseDataBase from "./BaseDataBase";


export default class GetAllFeedData extends BaseDataBase{


    async getFeed (type:string):Promise<any>{
         const result = await this.connection.raw(`
            SELECT * FROM Posts_labook
            WHERE type = '${type}';
         `)

         return result[0]
    }
}