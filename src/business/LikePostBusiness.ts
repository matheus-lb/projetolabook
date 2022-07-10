import LikePostData from "../data/likePostData";
import TokenServices from "../services/TokenServices";




export default class LikePostBusiness{

    tokenServices = new TokenServices()
    likePostData = new LikePostData()
    

    async createLikePost (token : string | undefined , idPost : string) : Promise<any>{

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

        const vefifyPost = await this.likePostData.verifyPost(idPost)

        if(!vefifyPost){
            throw new Error("post inexistente")   
        }


        const verifyLike = await this.likePostData.verifyLike(verifyToken,idPost)

        if(verifyLike){
            throw new Error("Post já curtido")
        }

        const result = await this.likePostData.doLike(verifyToken,idPost)
        
        return result

    }

}