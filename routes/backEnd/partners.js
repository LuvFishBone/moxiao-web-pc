import express from 'express';
import authToken from '../../middleware/authToken';
const router = express.Router();

router.get('/', authToken(), function(req, res, next) {
  res.render('pages/backEnd/partners', { title: '合作伙伴管理' });
});

export default router;