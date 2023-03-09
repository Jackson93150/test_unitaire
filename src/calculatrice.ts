export class Calculatrice {
  addition(a: number, b: number): number {
    return a + b;
  }

  soustraction(a: number, b: number): number {
    return a - b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division par zéro impossible");
    }
    return a / b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }
}
