import GetPostById from "../data/GetPostByIdData";
import TokenServices from "../services/TokenServices";
import inputGetPostIdBusinessDTO from "../types/inputGetPostIdBusinessDTO";



export default class GetPostIdBusiness{

    tokenServices = new TokenServices()
    getPostIdData = new GetPostById()
    

    async getPost (data:inputGetPostIdBusinessDTO) : Promise<any>{

        const {token,id} = data

        if(!token){
            throw new Error('usuário nao verificado')
        }
        if(!id){
            throw new Error("Deve ser informado o ID")
        }

        const verifyToken = this.tokenServices.verifyToken(token)
        
        if(!verifyToken){
            throw new Error("token inválido")
        }

        const result = await this.getPostIdData.getPostbyId(id)
        
        return result

    }

}