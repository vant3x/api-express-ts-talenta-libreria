import { DataTypes } from "sequelize"; 
import { sequelize } from "./../config/dbConfig"; 

export const RoleModel = sequelize.define('roles', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    permissions: {
      type: DataTypes.STRING 
    }
}, {
  timestamps: true
});

async function createRoles() {

  const count = await RoleModel.count();
  if (count === 0) {
    const roles = [
      {
        name: 'admin',
        description: 'Administrator role',
        permissions: 'all',
      },
      {
        name: 'client',
        description: 'Client role',
        permissions: 'read-only',
      },
    ];

    await RoleModel.bulkCreate(roles, { ignoreDuplicates: true });

    console.log("Roles created successfully!");
  } else {
    console.log("Roles already exist in the database");
  }
}

export default createRoles;