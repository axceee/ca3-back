import { Router } from "express";
import { getUsers, registerUser } from "../controllers/user.controllers.js";
const route = Router()

route.post('/register',registerUser)
route.get('/getusers',getUsers)


export default route