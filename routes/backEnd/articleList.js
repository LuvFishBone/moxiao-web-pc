import express from 'express';
import authToken from '../../middleware/authToken';
const router = express.Router();

router.get('/', authToken(), function(req, res, next) {
  res.render('pages/backEnd/articleList', { title: '文章列表' });
});

export default router;