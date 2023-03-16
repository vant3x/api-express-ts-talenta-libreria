import { Router } from "express";
import {
  newUserClientController,
  getUserClientControllerById,
  getUserClientsController,
  updateUserClientControllerById,
  deleteUserClientControllerById,
} from "../controllers/users.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();
/**
 * http://localhost:3000/api/auth/register [POST]
 */

router.post("/new-user", checkJwt, newUserClientController);
router.get("/", checkJwt, getUserClientsController);
router.get("/:id", checkJwt, getUserClientControllerById);
router.put("/:id", checkJwt, updateUserClientControllerById);
router.delete("/:id", checkJwt, deleteUserClientControllerById);

export { router };
