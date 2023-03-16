import multer, { FileFilterCallback } from "multer";
import shortid from "shortid";


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "/../../uploads");
    },
    filename: (req, file, cb) => {
      const extension = file.originalname.substring(
        file.originalname.lastIndexOf("."),
        file.originalname.length
      );
      cb(null, `${shortid.generate()}${extension}`);
    },
  });
  
  const uploadFile = multer({ storage: fileStorage }).single("image");


  export {  uploadFile  };
