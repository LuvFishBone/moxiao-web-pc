import { verifyToken } from '../utils/jwtCommon';
import response from '../utils/response';

export default function(ops = 'page') {
  return function(req, res, next) {
    // const token = req.get('Auth-Token');
    const token = req.cookies['Auth-Token'];
    // console.log(token, '---token---');
    function _response(hasToken) {
      const errorMsg = hasToken ? '亲：Token失效了,请重新登录' : '亲：您还没有登录,请先登录！';
      if (ops === 'page') {
        res.render('pages/backEnd/guide', { msg: errorMsg });
      } else {
        res.send(response.err(errorMsg));
      }
    }
    if (token){
      verifyToken(token).then((data) => {
          if(data) {
              req.decoded = data
              next()
          }
          else {
            _response(1);
          }
      });
    }
    else {
      _response();
    }
  }
}