import { Auth } from './../interfaces/auth.interface';
import { UserModel } from '../models/User';
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { UserAdmin } from '../interfaces/user-admin.interface';

const createNewUser = async ({email, password, name, lastname, phone}: UserAdmin) => {
    const checkUser = await UserModel.findOne({where: {
        email
    }});
    if (checkUser) return "AlREADY_USER";
    const passHash = await encrypt(password); 
    const newUser = await UserModel.create({
        email, password: passHash, name, lastname, roleId: 1, phone
    });
    return newUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ where: {
        email
    } });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.get('password') as string;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.get('email') as string);
  const data = {
    token,
    user: checkIs.toJSON(),
};
  return data;
}

export { createNewUser, loginUser };