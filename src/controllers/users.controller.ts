import { Request, Response, NextFunction } from "express";
import {
  createNewUserClient,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById
} from "../services/users.service";
import { handleHttp } from "../utils/error.handle";

const newUserClientController = async (req: Request, res: Response) => {
  try {
    const responseUser = await createNewUserClient(req.body);
    res.send(responseUser);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_NEW_CLIENT", error);
  }
};

const getUserClientControllerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getUserById(id);
    const data = response ? response : { msg: "NOT FOUND" };
    res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_USER", error);
  }
};

const getUserClientsController = async (req: Request, res: Response) => {
  try {
    const response = await getAllUsers();
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_USERS", error);
  }
};

const updateUserClientControllerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await updateUserById(id, req.body);
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_USER", error);
  }
};

const deleteUserClientControllerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteUserById(id);
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_USER", error);
  }
};

export {
  newUserClientController,
  getUserClientControllerById,
  getUserClientsController,
  updateUserClientControllerById,
  deleteUserClientControllerById,
};
