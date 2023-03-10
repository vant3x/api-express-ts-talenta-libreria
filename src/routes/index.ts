import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * index.ts 
 * @returns
 */

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.ts').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
})