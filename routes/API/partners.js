import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import PartnersControllers from '../../controllers/partners';
import authToken from '../../middleware/authToken';

const router = express.Router();

router.post('/partners/add',authToken(), asyncMiddleware(PartnersControllers.add));

router.post('/partners/remove/:id',authToken(), asyncMiddleware(PartnersControllers.delete));

router.post('/partners/update/:id',authToken(), asyncMiddleware(PartnersControllers.update));

router.get('/partners/list', asyncMiddleware(PartnersControllers.list));

export default router;