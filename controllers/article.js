import Article from '../models/article';
import response from '../utils/response';

class ArticleControllers {

  async add (req, res, next) {
    const {title, intro, thumbUrl, content} = req.body;
    const result = await Article.add(title, intro, thumbUrl, content);
    res.json(response.succ('文章创建成功！', result));
  }

  async remove (req, res, next) {
    const result = await Article.remove(req.params.id);
    res.json(response.succ('数据删除成功', result));
  }

  async update (req, res, next) {
    const id = req.params.id;
    const {title, intro, thumbUrl, content} = req.body;
    const result = await Article.update(id, {title, intro, thumbUrl, content});
    res.json(response.succ('更新成功', result));
  }

  async list (req, res, next) {
    const result = await Article.list();
    res.json(response.succ('获取所有文章', result));
  }

  async listSimple (req, res, next) {
    const result = await Article.listSimple();
    res.json(response.succ('获取所有文章简介不包含内容', result));
  }

  async queryById (req, res, next) {
    const id = req.params.id;
    const result = await Article.queryById(id);
    res.json(response.succ('通过ID获取内容详情', result));
  }

  async total (req, res, next) {
    const result = await Article.total();
    res.json(response.succ('文章总数', result));
  }

  async paging (req, res, next) {
      const { offset, limit } = req.params;
      const result = await Article.paging(offset, limit);
      res.json(response.succ('分页数据获取', result));
  }

}

export default new ArticleControllers()
