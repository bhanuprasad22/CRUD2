import express from 'express';
import { createtodo, deletetodo, gettodo, gettodobyid, updatetodo } from '../controllers/todocontroller';

const router = express.Router();

router.post('/',createtodo);

router.get('/',gettodo);

router.get('/:id',gettodobyid);

router.get('/:id',updatetodo);

router.get('/:id',deletetodo);

export default router;