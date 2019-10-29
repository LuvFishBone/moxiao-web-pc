import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/frontEnd/joinUs', { title: '合作加盟-' });
});

export default router;
