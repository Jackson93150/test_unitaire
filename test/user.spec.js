"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const user_1 = require("../src/user");
describe('User', () => {
    let user;
    describe('isValid email', () => {
        it('devrait retourner false si le mail na pas le bon format', () => {
            user = new user_1.User('jacksongmail.com', 'jackson', 'anthonipillai', 21);
            chai_1.assert.equal(user.isValid(), false);
        });
    });
    describe('isValid age', () => {
        it('devrait retourner false si lage indiqué nest pas lage requis', () => {
            user = new user_1.User('jackson@gmail.com', 'jackson', 'anthonipillai', 12);
            chai_1.assert.equal(user.isValid(), false);
        });
    });
    describe('isValid name', () => {
        it('devrait retourner false si les champs nom ou prenom ne sont pas indiqué sinon true', () => {
            user = new user_1.User('jackson@gmail.com', '', 'anthonipillai', 21);
            chai_1.assert.equal(user.isValid(), false);
            user = new user_1.User('jackson@gmail.com', 'jackson', '', 21);
            chai_1.assert.equal(user.isValid(), false);
        });
    });
    describe('isValid isvalid', () => {
        it('devrait retourner true si tous les champs sont valide', () => {
            user = new user_1.User('jackson@gmail.com', 'jackson', 'anthonipillai', 21);
            chai_1.assert.equal(user.isValid(), true);
        });
    });
});
