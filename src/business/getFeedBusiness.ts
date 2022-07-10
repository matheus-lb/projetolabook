import GetFeedData from "../data/getFeedData";
import TokenServices from "../services/TokenServices";


export default class GetFeedBusiness{

    tokenServices = new TokenServices
    getFeedData = new GetFeedData()
    

    async getFeed (token : string | undefined) : Promise<any>{

        if(!token){
            throw new Error('usuário nao verificado')
        }

        const verifyToken = this.tokenServices.verifyToken(token)

        if(!verifyToken){
            throw new Error("token inválido")
        }
        const myFriends = await this.getFeedData.searchMyFriends(verifyToken)

        let arrayPosts : any[] = []

        for(let i=0 ; i < myFriends.length ; i++){
            const query = (`
                SELECT * FROM Posts_labook
                WHERE user_id = '${myFriends[i].id}'
            `)

            const result = await this.getFeedData.getFeed(query)

            arrayPosts.push(result)

        }

        const postsOrdenado = arrayPosts.sort((a,b)=>{
            return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);
        })

        return postsOrdenado

    }



}