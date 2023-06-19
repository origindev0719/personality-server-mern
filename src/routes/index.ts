import { Router } from "express";
import * as PersonalityController from "../controllers/personality.controller";
import * as UserController from "../controllers/user.controller";

const router = Router();

router.get("/question", PersonalityController.getQuestions);
router.get("/relationship", PersonalityController.reltionship);
router.post("/personality", PersonalityController.getPersonality);
router.post("/result", PersonalityController.result);
router.post("/login", UserController.signin);
router.post("/signup", UserController.signup);
router.get("/test", (req, res) => {
  res.json("server is working fine");
});

export default router;
