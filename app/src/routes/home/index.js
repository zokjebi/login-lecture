// ECMA 스크립트 준수
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

/*
router.get("/", (req, res) => {
    //res.send("여기는 루트입니다.");
    res.render("home/index");
});
*/

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;