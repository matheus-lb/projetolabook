import * as jwt from 'jsonwebtoken'

export default class TokenServices{

    generateToken (id:string): string {
        const expires : string = '1d'
        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
               expiresIn : expires,
            }
        )

        return token
    }

    public  verifyToken(token: any):string{
        const payload = jwt.verify(token as string,process.env.JWT_KEY as string) as any

        return payload.id
    }
}