import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/frontEnd/jobs', { title: '招贤纳士-' });
});

export default router;