import { Request, Response, NextFunction } from "express";
import { createNewUser, loginUser } from "./../services/auth.service";
import { handleHttp } from "./../utils/error.handle";


const signupController = async (req: Request, res: Response) => {
    try {
        const responseUser = await createNewUser(req.body);
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_SIGNUP", error);
    }
} 

const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const responseUser = await loginUser({ email, password });
      
        if (responseUser === "PASSWORD_INCORRECT") {
          res.status(403);
          res.send(responseUser);
        } else {
          res.send(responseUser);
        }
    } catch (error) {
        handleHttp(res, "ERROR_LOGIN", error);
    }
}

export { signupController, loginController };