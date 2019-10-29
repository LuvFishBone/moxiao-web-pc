import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import TokenControllers from '../../controllers/token';
const router = express.Router();

router.post('/login', asyncMiddleware(TokenControllers.createToken));

router.get('/find', (req, res, next) => {
  res.json({'user': '11111'});
});

export default router;