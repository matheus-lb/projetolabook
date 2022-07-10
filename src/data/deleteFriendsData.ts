import BaseDataBase from "./BaseDataBase";


export default class DeleteFriendsData extends BaseDataBase{


    async deleteFriendship (idUser : string , idFriend:string):Promise<any>{
        await this.connection.raw(`
        DELETE FROM Friends_labook
        WHERE firstId = '${idUser}' AND SecondId = '${idFriend}' 
        OR firstId = '${idFriend}'AND secondId = '${idUser}'
        `)

        return {result:'Amizade finalizada'}
    }

  

    async searchFriendship (idUser:string,idFriend:string):Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Friends_labook
            WHERE firstId = '${idUser}' AND SecondId = '${idFriend}' 
            OR firstId = '${idFriend}'AND secondId = '${idUser}'
        `)
        
        return result[0][0]
    }


}