import jsonwebtoken from "jsonwebtoken"
import resposneHandler from "../handlers/resposne.handler.js"
import userModel from "../models/user.model.js"

const tokendecode = (req) => {
    try{
        const bearerHeader = req.headers["authorization"]

        if (bearerHeader){
            const token = bearerHeader.split(" ")[1]

            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET
            )
        }

        return false;
    } catch{
        return false
    }
};

const auth = async (req,res, next)=>{
    const tokenDecoded = tokenDecode(req)

    if (!tokenDecoded) return resposneHandler.unauthorize(res)

        const user = await userModel.findById(tokenDecoded.data)

        if (!user) return resposneHandler.unauthorize(res);

        req.user = user;

        next();
};

export default{ auth , tokenDecode};