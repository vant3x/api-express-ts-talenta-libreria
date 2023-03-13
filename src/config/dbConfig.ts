import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";
//import config from './../../db/config/config.json';

export const sequelize = new Sequelize('talenta-library',  'talenta', 'talenta2023', {
    host: 'postgres',    
    dialect: 'postgres'
});