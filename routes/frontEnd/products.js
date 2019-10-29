import express from 'express';
const router = express.Router();

// const bannerOps = [
//   {url: '/images/products/banner-1.png', text:'banner文案1'},
// ];

router.get('/', function(req, res, next) {
  res.render('pages/frontEnd/products', { title: '产品介绍-'});
});

export default router;