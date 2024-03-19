import { createUser, getUser, updateUser } from 'controller/userController';
import express from 'express';
import { jwtCheck, jwtParse } from 'middleware/auth';

const router = express.Router();

router.post('/create', jwtCheck, createUser);
router.patch('/update', jwtCheck, jwtParse, updateUser);
router.get('/', jwtCheck, jwtParse, getUser);

export default router;
