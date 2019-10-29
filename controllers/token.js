import jwt from 'jsonwebtoken';
import User from '../models/users';
import { secret, tokenExp } from '../config';
import response from '../utils/response';

class TokenControllers {
    async createToken(req, res, next) {
        const {
            name,
            password
        } = req.body
        const result = (await User.findUser(name))[0];
        // console.log(result);
        if (result) {
            if (password === result.password) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + tokenExp * 60 * 60 // 一天
                }, secret);
                res.json(response.succ('创建token成功', { 'Auth-Token': token }));
            }
            else {
              // res.status(402).send('用户名或密码错误！');
              res.json(response.err('用户名或密码错误！'));
            }
        }
        else {
          // res.status(403).send('用户不存在！');
          res.json(response.err('用户不存在！'));
        }
    }
}

export default new TokenControllers()
