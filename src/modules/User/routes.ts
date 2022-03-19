import express from 'express';
import UserControler from './Controller';

const router = express.Router();

router.get('/', UserControler.getAll);

export default router;
