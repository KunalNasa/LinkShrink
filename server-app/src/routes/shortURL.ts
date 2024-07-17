import express from 'express';
const router = express.Router();
import { createURL , getAllURL, getURL, deleteURL } 
from '../controllers/shortURL';
router.post("/shortURL", createURL);
router.get("/shortURL", getAllURL);
router.get("/shortURL/:id", getURL);
router.delete("/shortURL/:id", deleteURL);

export default router;