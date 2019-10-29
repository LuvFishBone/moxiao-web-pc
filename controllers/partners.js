import Partners from '../models/partners';
import response from '../utils/response';

class PartnersControllers {

  async add (req, res, next) {
    const {name, address, tel, email} = req.body;
    const result = await Partners.add(name, address, tel, email);
    res.json(response.succ('合作伙伴创建成功！'));
  }

  async delete (req, res, next) {
    const result = await Partners.delete(req.params.id);
    res.json(response.succ('数据删除成功', result));
  }

  async update (req, res, next) {
    const id = req.params.id;
    const {name, address, tel, email} = req.body;
    const result = await Partners.update(id, {name, address, tel, email});
    res.json(response.succ('更新成功', result));
  }

  async list (req, res, next) {
    const result = await Partners.list();
    res.json(response.succ('获取所有合作伙伴', result));
  }

}

export default new PartnersControllers()
