import express from 'express';
const router = express.Router();

// const bannerOps = [
//   {url: '/images/solutions/banner-1.png', text:'banner文案1'}
// ];

router.get('/', function(req, res, next) {
  res.render('pages/frontEnd/solution', { title: '解决方案-' });
});

export default router;
