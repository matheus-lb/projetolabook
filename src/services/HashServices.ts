import * as bcrypt from 'bcryptjs'

export class HashServices{

    public  async generateHash(senha:string): Promise<string> {
        const rounds : number = 12
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(senha,salt)
        return result
    } 

    public async compareHash(senha:string , hash : string)  : Promise<boolean> {
        return bcrypt.compare(senha,hash)
    }


}