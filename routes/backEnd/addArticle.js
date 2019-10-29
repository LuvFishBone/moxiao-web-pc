import express from 'express';
import authToken from '../../middleware/authToken';
const router = express.Router();

router.get('/', authToken(), function(req, res, next) {
  res.render('pages/backEnd/addArticle', { title: '添加文章' });
});

export default router;