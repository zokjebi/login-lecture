"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        password: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        //console.log(fields);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            //console.log(newUsers, field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        //console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        //console.log(users);

        return { success : true };
    }
}

module.exports = UserStorage;