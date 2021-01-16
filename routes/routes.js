const express = require("express");
const router = express.Router();
const {login}=require("../controllers/login");
const {list}=require("../controllers/list");
const {updatePassword}=require("../controllers/updatePassword");
const auth = require("../middleware/auth");
const{winner}=require("../controllers/winner");
const { home } = require("../controllers/home");
const {winnerPage}=require("../controllers/winnerPage")

router.get("/history/:pageState", list);
router.post("/login",login);
router.post("/update",updatePassword)
router.post("/winner",winner)
router.get("/home",home)
router.get("/winnerPage/:date",winnerPage)
module.exports = router;