// ECMA 스크립트 준수
"use strict";

/*
console.log("hello");
console.log("bye");
*/

const id = document.querySelector("#id"),
      password = document.querySelector("#password"),
      loginBtn = document.querySelector("button");

/*
console.log(id);
console.log("hello");      
*/

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        passwrod: password.value,
    };

    console.log(req);
}