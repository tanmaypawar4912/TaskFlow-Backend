import { Router } from 'express';
import protect from '../middleware/authMiddleware';
import { updateProfile, changePassword, getPreferences, updatePreferences } from '../controllers/authController';
const r=Router(); r.use(protect); r.put('/profile',updateProfile); r.put('/password',changePassword); r.get('/preferences',getPreferences); r.put('/preferences',updatePreferences); export default r;
