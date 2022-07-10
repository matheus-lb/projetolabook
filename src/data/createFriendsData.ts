import BaseDataBase from "./BaseDataBase";


export default class CreateFriendsData extends BaseDataBase{


    async createFriendship (userId : string , friendId:string):Promise<any>{
        await this.connection.raw(`
            INSERT INTO Friends_labook (firstId,SecondId)
            VALUES ('${userId}','${friendId}');
        `)

        return {result:'Nova Relação de amizade'}
    }

    async searchUserById (id:string) : Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM User_labook 
            WHERE id = '${id}';
        `)

        return result[0][0]
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