import { Router } from "express";
import { check } from "express-validator";
import {
  signupController,
  loginController,
  userAuthenticate,
} from "../controllers/auth.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();
/**
 * http://localhost:3000/api/auth/signup [POST]
 */

router.post(
  "/signup",
  [
    check("email", "Agrega un email valido").isEmail(),
    check("password", "El password no puede ir vacio").not().isEmpty(),
  ],
  signupController
);
router.post(
  "/login",
  [
    check("email", "Agrega un email valido").isEmail(),
    check("password", "El password no puede ir vacio").not().isEmpty(),
  ],
  loginController
);
router.get("/login", checkJwt, userAuthenticate);

export { router };
