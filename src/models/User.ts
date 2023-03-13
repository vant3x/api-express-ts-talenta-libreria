import { DataTypes, InferCreationAttributes, Model } from "sequelize"; 
import { UserAdmin } from "../interfaces/user-admin.interface";
import { sequelize } from "./../config/dbConfig"; 
import { RoleModel } from "./Role";

export const UserModel  = sequelize.define<Model<UserAdmin, UserAdmin>>('users', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    }
}, {
  timestamps: true
});


UserModel.belongsTo(RoleModel, { foreignKey: 'roleId' });
