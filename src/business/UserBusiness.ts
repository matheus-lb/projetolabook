import UserData from "../data/userData";
import GenerateId from "../services/GenerateId";
import { HashServices } from "../services/HashServices";
import TokenServices from "../services/TokenServices";
import inputUserDataDTO from "../types/inpurUserDataDTO";
import outputUserBusiness from "../types/outputUserBusinessDTO";



export default class UserBusiness {


    userData = new UserData()
    generateId = new GenerateId()
    hashServices = new HashServices()
    tokenServices = new TokenServices()

    async createUser (name:string,email:string,password:string) : Promise<any>{

        if (!name||!email||!password){
            throw new Error("Dados da requisição incompletos")
        }
        
        if (email.indexOf("@") === -1){
            throw new Error("Email Inválido")
        }

        const id = this.generateId.generateId()
        const passwordHash  = await this.hashServices.generateHash(password)

        const data : inputUserDataDTO = {
            id,
            name,
            email,
            password : passwordHash
        }

        await this.userData.createUser(data)

        const token = this.tokenServices.generateToken(id)

        const output : outputUserBusiness = {
            description:"usuario criado com sucesso",
            token : token
        }
        return output
    }
}