"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculatrice = void 0;
class Calculatrice {
    addition(a, b) {
        return a + b;
    }
    soustraction(a, b) {
        return a - b;
    }
    division(a, b) {
        if (b == 0)
            throw new Error("Division par zéro impossible");
        return a / b;
    }
    multiplication(a, b) {
        return a * b;
    }
}
exports.Calculatrice = Calculatrice;
