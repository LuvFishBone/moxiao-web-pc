import express from 'express';
const router = express.Router();

const bannerOps = [
  {url: '/images/home/banner-1.png', text:''},
  {url: '/images/home/banner-2.png', text:''},
  // {url: '/images/home/banner-3.png', text:''},
  {url: '/images/home/banner-4.png', text:''}
];
router.get('/', (req, res, next) => {
  res.render('pages/frontEnd/home', { title: '', bannerConfig: bannerOps });
});

export default router;