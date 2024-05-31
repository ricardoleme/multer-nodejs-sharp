import { Router } from "express";
import uploadImageHandler from "./uploadImageMiddleware.js";
import path from "path";

const router = Router();

router.post("/images", uploadImageHandler, (req, res) => {
  res
    .status(200)
    .json({'message': `${req.file.filename}" uploaded successfully.`})
    ;
});

export default router;
