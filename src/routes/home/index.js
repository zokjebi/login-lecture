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

router.get("/", ctrl.hello);

/*
router.get("/login", (req, res) => {
    //res.send("여기는 로그인 화면입니다.");
    res.render("home/login");
});
*/

router.get("/login", ctrl.login);

module.exports = router;