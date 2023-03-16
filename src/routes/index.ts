import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();  
/**
 * index.ts item
 * @returns 
 */

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".routes.ts")[0];
  return file;
};

const logError = (err: any) => {
  console.error(`Error al importar ruta: ${err}`);
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (fileName.endsWith(".routes.ts")) {
    import(`./${cleanName}.routes.ts`).then((moduleRouter) => {
      router.use(`/api/${cleanName}`, moduleRouter.router);
    }).catch(logError);
  }
});

export { router };
