

//directly relate to controllers

import { Router } from "../../router";
import { loginUser } from "../Sessions/Auth/authLogin";

const router = new Router();
router.get('login', loginUser());