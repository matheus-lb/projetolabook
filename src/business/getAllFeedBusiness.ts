import GetAllFeedData from "../data/getAllFeedData";
import GetFeedData from "../data/getFeedData";
import TokenServices from "../services/TokenServices";


export default class GetAllFeedBusiness{

    getAllFeedData = new GetAllFeedData()
    

    async getFeed (type : string ) : Promise<any>{

        if(!type){
            throw new Error('Preencher todos os dados da requisição')
        }
    
        const AllFeed = await this.getAllFeedData.getFeed(type)

        return AllFeed

    }



}