import express from 'express';
import authToken from '../../middleware/authToken';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import Article from '../../models/article';
const router = express.Router();

router.get('/:id', authToken(), asyncMiddleware(async function(req, res, next) {
  const result = await Article.queryById(req.params.id);
  const articleInfo = result[0];
  const {title, content, thumbUrl, intro} = articleInfo;
  res.render('pages/backEnd/articleEditer', {
    title: '文章编辑',
    queryId: req.params.id,
    artTitle: title,
    content: content,
    thumbUrl: thumbUrl,
    intro: intro,
  });
}));

export default router;