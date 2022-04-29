import { Router } from "express";
const router:Router= Router();

import { booksController } from "../controllers/booksControllers";

router.get('/',booksController.index);
router.get('/add',booksController.renderFormBooks);
router.post('/add', booksController.saveBook)

export default router;