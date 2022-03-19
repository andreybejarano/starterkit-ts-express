import express from 'express';

import userRouter from '../modules/User/routes';

const router = express.Router();

router.use('/user', userRouter);

export default router;
