import express from 'express';
import authToken from '../../middleware/authToken';
const router = express.Router();

router.get('/', authToken(), function(req, res, next) {
  res.render('pages/backEnd/metas', { title: '页面meta' });
});

export default router;