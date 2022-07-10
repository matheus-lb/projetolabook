import BaseDataBase from "./BaseDataBase";


export default class GetFeedData extends BaseDataBase{


    async getFeed (query:string):Promise<any>{
        const result = await this.connection.raw(`${query}`)

        return result[0][0]
    }

  

    async searchMyFriends(idUser:string):Promise<any>{
        const result = await this.connection.raw(`
        SELECT firstId as id FROM Friends_labook 
        WHERE firstId = '${idUser}' OR secondId = '${idUser}'
        UNION
        SELECT SecondId as id FROM Friends_labook 
        WHERE firstId = '${idUser}' OR secondId = '${idUser}';
        `)
        
        return result[0]
    }


}