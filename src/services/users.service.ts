import { Auth } from '../interfaces/auth.interface';
import { ClientModel } from '../models/Client';
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { User } from '../interfaces/user.interface';
import { RoleModel } from '../models/Role';

const createNewUserClient = async ({email, name, lastname, phone}: User) => {
    const checkUser = await ClientModel.findOne({where: {
        email
    }});
    if (checkUser) return "AlREADY_USER";
    const newUser = await ClientModel.create({
        email,  name, lastname, roleId: 2, phone
    });
    return newUser;
}

const getUserById = async (id: string) => {
    const responseUser = await ClientModel.findOne({
        where: {
            id
        },
        include: [
            {
              model: RoleModel,
              attributes: ['name', 'description', 'permissions']
            }
          ]
    });
    return responseUser;
}

const getAllUsers = async () => {
    const responseUsers = await ClientModel.findAll();
    return responseUsers;
}

const updateUserById = async (id: string, data: User) => {
    const [, updateBookResponse]  = await ClientModel.update(data,  {
        where: {
            id
        },
        returning: true
    });
    return updateBookResponse;
}


const deleteUserById = async (id: string) => {
    const responseBook = await ClientModel.destroy({
        where: {
            id
        }
    });
    return responseBook;
}

export { createNewUserClient, getUserById, getAllUsers, updateUserById, deleteUserById };