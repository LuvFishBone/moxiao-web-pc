import jwt from 'jsonwebtoken'
import { secret } from '../config'

const signToken = function(obj) {
    return jwt.sign(obj, secret);
}

const verifyToken = function(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function(err, decoded){
            if(err){
                resolve(null)
            }
            else {
                resolve(decoded)
            }
        })
    })
}

export { signToken, verifyToken }