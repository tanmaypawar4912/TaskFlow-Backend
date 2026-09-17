import { Router } from 'express';
import protect from '../middleware/authMiddleware';
import { register, login, googleLogin, logout, me } from '../controllers/authController';
const r=Router();
r.post('/register',register); r.post('/login',login); r.post('/google',googleLogin); r.post('/logout',logout); r.get('/me',protect,me);
export default r;
