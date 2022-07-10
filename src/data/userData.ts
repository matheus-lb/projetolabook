import createUserDataDTO from "../types/inpurUserDataDTO"
import BaseDataBase from "./BaseDataBase"

export default class UserData extends BaseDataBase {

    constructor(){
        super()
    }

    async createUser (data: createUserDataDTO) : Promise<void>{
        await this.connection.raw(`
            INSERT INTO User_labook (id,name,email,password)
            VALUES ('${data.id}','${data.name}','${data.email}','${data.password}')
        `)
    }

}