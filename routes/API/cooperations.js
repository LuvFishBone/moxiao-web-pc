import express from 'express';
import asyncMiddleware from '../../middleware/asyncMiddleware';
import CooperationControllers from '../../controllers/cooperations';
// import authToken from '../../middleware/authToken';

const router = express.Router();

router.post('/cooperation/add', asyncMiddleware(CooperationControllers.add));


export default router;