import { Router } from "express";
import {
  newUserClientController,
  getUserClientControllerById,
  getUserClientsController,
  updateUserClientControllerById,
  deleteUserClientControllerById,
} from "../controllers/users.controller";

const router = Router();
/**
 * http://localhost:3000/api/auth/register [POST]
 */

router.post("/new-user", newUserClientController);
router.get("/", getUserClientsController);
router.get("/:id", getUserClientControllerById);
router.put("/:id",  updateUserClientControllerById);
router.delete("/:id",  deleteUserClientControllerById);

export { router };
