"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(email, nom, prenom, age) {
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    isValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            return false;
        }
        if (this.age < 13) {
            return false;
        }
        if (!this.nom || !this.prenom) {
            return false;
        }
        return true;
    }
}
exports.User = User;
