/*
const http = require("http");
const app = http.createServer((req, res) => {
    //console.log(req.url);
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    if (req.url === '/') {
        res.end("[http] 여기는 루트입니다.");
    } else if (req.url === '/login') {
        res.end("[http] 여기는 로그인 화면입니다.");
    }
});

app.listen(3001, () => {
    console.log("http로 가동된 서버입니다.")
})
*/

// ECMA 스크립트 준수
"use strict";

const express = require("express");
const app = express();

const home = require("./src/routes/home");

//const PORT = 3000;

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

/*
app.listen(PORT, () => {
    console.log("서버 가동");
});
*/

module.exports = app;