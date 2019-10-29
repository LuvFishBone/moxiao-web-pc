import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import Partners from '../../models/partners';
const router = express.Router();

router.get('/', asyncMiddleware(async function(req, res, next) {

  const result = await Partners.list();

  res.render('pages/frontEnd/contactUs',
    {
      title: '联系我们-',
      partners: result,
    }
  );
}));

export default router;
