import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import ArticleControllers from '../../controllers/article';
import authToken from '../../middleware/authToken';

const router = express.Router();

router.post('/article/add',authToken(), asyncMiddleware(ArticleControllers.add));

router.get('/article/remove/:id',authToken(), asyncMiddleware(ArticleControllers.remove));

router.post('/article/update/:id',authToken(), asyncMiddleware(ArticleControllers.update));

router.get('/article/list', asyncMiddleware(ArticleControllers.list));

router.get('/article/listSimple', asyncMiddleware(ArticleControllers.listSimple));

router.get('/article/queryById/:id', asyncMiddleware(ArticleControllers.queryById));

export default router;