// ECMA 스크립트 준수
"use strict";

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    password: ["1234", "1234", "123456"],
};

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        //console.log(req.body);
        const id = req.body.id,
              password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    }, 
};

module.exports = {
    output,
    process,
};