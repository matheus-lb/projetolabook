import CreatePostData from "../data/createPostData";
import GenerateId from "../services/GenerateId";
import TokenServices from "../services/TokenServices";
import createPostDataDTO from "../types/createPostDataDTO";
import inputPostBusinessDTO from "../types/inputPostBusinessDTO";



export default class CreatePostBusiness{

    tokenServices = new TokenServices
    generateId = new GenerateId
    postData = new CreatePostData
    

    async createPost (data:inputPostBusinessDTO) : Promise<any>{
        const {token,photo,description,type} = data

        if(!token){
            throw new Error('usuário nao verificado')
        }
        if(!photo||!description||!type){
            throw new Error("dados incompletos na requisição")
        }

        const verifyToken = this.tokenServices.verifyToken(token)

        console.log(verifyToken)

        if(!verifyToken){
            throw new Error("token inválido")
        }

        const id = this.generateId.generateId()

        const inputData : createPostDataDTO = {
            id:id,
            photo:photo,
            description:description,
            date : Date.now(),
            type : type,
            userId:verifyToken
        }

        const result = await this.postData.createPost(inputData)
        
        return result

    }

}