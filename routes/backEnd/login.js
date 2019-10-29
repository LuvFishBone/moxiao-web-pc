import express from 'express';
const router = express.Router();
router.get('/', function(req, res, next) {
  res.render('pages/backEnd/login', { title: '后台登录' });
});

export default router;