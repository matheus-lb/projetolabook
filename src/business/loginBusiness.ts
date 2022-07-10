import LoginData from "../data/loginData"
import { HashServices } from "../services/HashServices";
import TokenServices from "../services/TokenServices";
import outputUserBusiness from "../types/outputUserBusinessDTO";




export default class LoginBusiness {


    loginData = new LoginData()
    hashServices = new HashServices()
    tokenServices = new TokenServices()

    async login (email:string,password:string) : Promise<any>{

        if (!email||!password){
            throw new Error("Dados da requisição incompletos")
        }
        
        if (email.indexOf("@") === -1){
            throw new Error("Email Inválido")
        }

        const findUser = await this.loginData.searchUserByEmail(email)

        if(!findUser){
            throw new Error("Email inválido")
        }

        const comparePassword = await this.hashServices.compareHash(password,findUser.password)

        if(comparePassword === false){
            throw new Error("senha inválida")
        }
        
        const token = this.tokenServices.generateToken(findUser.id)
        
        const output : outputUserBusiness ={
            description:"Acesso validado",
            token: token
        }

        return output
        
    }
}