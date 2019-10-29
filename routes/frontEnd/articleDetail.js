import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import article from '../../models/article';
const router = express.Router();

router.get('/:id', asyncMiddleware(async function(req, res, next) {
  const id = req.params.id;
  const result = await article.queryById(id);
  // console.log(result);
  if (result.length) {
    res.render('pages/frontEnd/articleDetail',
    { 
      title: '文章详情-',
      articleDetail: result[0]
    });
  } else {
    next();
  }

}));

export default router;