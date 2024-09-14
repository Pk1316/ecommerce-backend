import express from 'express';
import { register, login, refreshTokens } from "../controllers/authController";
import { validateInput } from "../utils/validateInput";
import { registrationSchema, loginSchema, refreshTokenSchema } from "../validators/authValidator";

const router = express.Router();
 
router.post('/register', (req, res, next) => {
  try {
    validateInput(registrationSchema, req.body);
    register(req, res);
  } catch (error) {
    next(error);
  }
});
 
router.post('/login', (req, res, next) => {
  try {
    validateInput(loginSchema, req.body);
    login(req, res);
  } catch (error) {
    next(error);
  }
});
router.post('/refresh-access-token', (req, res, next) => {
  try {
    validateInput(refreshTokenSchema, req.body);
    refreshTokens(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
