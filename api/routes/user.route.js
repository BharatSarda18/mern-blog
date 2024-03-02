import express from "express";
import { deleteUser, getUser, getUsers,signOut,test,updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utlis/verifyUser.js";


const router=express.Router();

router.get('/test',test);
router.put('update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.get('/getusers',verifyToken,getUsers);
router.get('/:userId',getUser);
router.get('/signout',signOut);

export default router;