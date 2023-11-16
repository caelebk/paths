import { createUser, deleteUser, getProfile, loginUser, updateProfile } from "@controller/UserController";
import { Router } from "express";

export const userRouter: Router = Router();

userRouter.post("/api/user", createUser);

userRouter.post("/api/user/login", loginUser);

userRouter.delete("/api/user/:id", deleteUser);

userRouter.get("/api/user/:id", getProfile);

userRouter.put("/api/user/:id", updateProfile);

