import { createUser, updateUser } from 'controller/userController';
import express from 'express';
import { jwtCheck, jwtParse } from 'middleware/auth';

const router = express.Router();

router.post('/create', jwtCheck, createUser);
router.get('/update', jwtCheck, jwtParse, updateUser);

export default router;
