"use strict";

const fs = require("fs").promises;

class UserStorage {
    
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const userInfo = Object.keys(users).reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            //console.log(userInfo);
            return userInfo;
    }

    static getUsers(...fields) {
        //console.log(fields);
        //const users = this.#users;

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
        //const users = this.#users;
        return fs.readFile("./src/databases/users.json")
          .then((data) => {
            return this.#getUserInfo(data, id);
          })
          .catch(console.error);
    }

    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        //console.log(users);

        return { success : true };
    }
}

module.exports = UserStorage;