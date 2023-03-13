import { Router } from "express";
import { signupController, loginController  } from "../controllers/auth.controller";

const router = Router();
/**
 * http://localhost:3000/api/auth/register [POST]
 */

router.get('/', (req, res) => {
    console.log(req);
    res.send(req)
});

export { router };