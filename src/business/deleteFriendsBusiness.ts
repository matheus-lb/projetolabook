import DeleteFriendsData from "../data/deleteFriendsData";
import TokenServices from "../services/TokenServices";




export default class DeleteFriendsBusiness{

    tokenServices = new TokenServices
    deletefriendsData = new DeleteFriendsData()
    

    async deleteFriend (token : string | undefined , idFriend : string) : Promise<any>{

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

        const verifyFriendship = await this.deletefriendsData.searchFriendship(verifyToken,idFriend)
        
        if (!verifyFriendship){
            throw new Error('Relação de amizade não existente')
        }
        
        const result = await this.deletefriendsData.deleteFriendship(verifyToken,idFriend)

        
        return result

    }

}