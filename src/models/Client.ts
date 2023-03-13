import { DataTypes, InferCreationAttributes, Model } from "sequelize"; 
import { User } from "../interfaces/user.interface";
import { sequelize } from "./../config/dbConfig"; 
import { RoleModel } from "./Role";

export const ClientModel  = sequelize.define<Model<User, User>>('clients', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    }
}, {
  timestamps: true
});


ClientModel.belongsTo(RoleModel, { foreignKey: 'roleId' });
