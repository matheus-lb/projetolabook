import CreateFriendsData from "../data/createFriendsData";
import GenerateId from "../services/GenerateId";
import TokenServices from "../services/TokenServices";




export default class CreateFriendsBusiness{

    tokenServices = new TokenServices
    generateId = new GenerateId
    friendsData = new CreateFriendsData()
    

    async createFriend (token : string | undefined , idFriend : string) : Promise<any>{

        if(!token){
            throw new Error('usuário nao verificado')
        }
        if(!idFriend){
            throw new Error("dados incompletos na requisição")
        }

        const verifyToken = this.tokenServices.verifyToken(token)

        if(!verifyToken){
            throw new Error("token inválido")
        }

        const verifyUser = await this.friendsData.searchUserById(idFriend)

        if(!verifyUser){
            throw new Error('usuário nao encontrado')
        }

        const verifyFriendship = await this.friendsData.searchFriendship(verifyToken,idFriend)
        
        if (verifyFriendship){
            throw new Error('Relação de amizade já existente')
        }
        const result = this.friendsData.createFriendship(verifyToken,idFriend)
        
        return result

    }

}