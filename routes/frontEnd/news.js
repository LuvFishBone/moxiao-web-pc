import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import Article from '../../models/article'; 
const router = express.Router();

router.get('/', asyncMiddleware(async function(req, res, next) {
  const listRes = await Article.listSimple();
  // const totalRes = await Article.total();
  // console.log(listRes);
  res.render('pages/frontEnd/news', {
    title: '新闻中心-',
    newsList: listRes,
    // newsTotal: totalRes[0].total
  });
}));

export default router;
