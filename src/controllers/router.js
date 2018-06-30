import express from 'express';
import navigation from './navigationController';

const router = express.Router();

router.use(navigation);

export default router;
