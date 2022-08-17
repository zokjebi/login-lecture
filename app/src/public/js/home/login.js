// ECMA 스크립트 준수
"use strict";

/*
console.log("hello");
console.log("bye");
*/

const id = document.querySelector("#id"),
      password = document.querySelector("#password"),
      loginBtn = document.querySelector("#button");

/*
console.log(id);
console.log("hello");      
*/

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    //console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req)
    })
      .then((res) => res.json())
      .then((res) => {
          
          if (res.success) {
              location.href = "/";
          } else {
              alert(res.msg);
          }
          
      })
      .catch((err) => {
        //console.error(new Error("로그인 중 에러 발생"));
        console.error("로그인 중 에러 발생");
      });

}