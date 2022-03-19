import express from 'express';
import UserControler from './Controller';

const router = express.Router();

router.get('/', UserControler.getAll);
router.post('/', UserControler.create);

export default router;
