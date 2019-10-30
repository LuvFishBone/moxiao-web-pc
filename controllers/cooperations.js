import Cooperation from '../models/cooperations';
import response from '../utils/response';

class CooperationControllers {

  async add (req, res, next) {
    const {name, cellphone, address, msg} = req.body;
    const result = await Cooperation.add(name, cellphone, address, msg);
    res.json(response.succ('提交成功！', result));
  }

}

export default new CooperationControllers()
