import express from 'express';
import authToken from '../../middleware/authToken';
const router = express.Router();

router.get('/', authToken(), function(req, res, next) {
  res.render('pages/backEnd/dashboard', { title: '管理端主页' });
});

export default router;