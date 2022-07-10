
import BaseDataBase from "./BaseDataBase"

export default class LoginData extends BaseDataBase {

    constructor(){
        super()
    }

    async searchUserByEmail (email:string) : Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM User_labook 
            WHERE email = '${email}';
        `)

        return result[0][0]
    }

}