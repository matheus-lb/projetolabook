import UnLikePostData from "../data/unlikePostData";
import TokenServices from "../services/TokenServices";




export default class UnLikePostBusiness{

    tokenServices = new TokenServices()
    unlikePostData = new UnLikePostData()
    

    async unLikePost (token : string | undefined , idPost : string) : Promise<any>{

        if(!token){
            throw new Error('usuário nao verificado')
        }
        if(!idPost){
            throw new Error("dados incompletos na requisição")
        }

        const verifyToken = this.tokenServices.verifyToken(token)

        if(!verifyToken){
            throw new Error("token inválido")
        }

        const verifyLike = await this.unlikePostData.verifyLike(verifyToken,idPost)

        if(!verifyLike){
            throw new Error("Você não curtiu este post")
        }

        const result = await this.unlikePostData.unLike(verifyToken,idPost)
        
        return result

    }

}