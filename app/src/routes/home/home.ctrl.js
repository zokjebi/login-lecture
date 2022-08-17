// ECMA 스크립트 준수
"use strict";

//const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        //console.log(response);
        return res.json(response);
    }, 
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        //console.log(response);
        return res.json(response);
    }, 
};

module.exports = {
    output,
    process,
};