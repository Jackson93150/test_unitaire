import { assert } from 'chai';
import { Calculatrice } from '../src/calculatrice';

describe('Calculatrice', () => {
  let calc: Calculatrice;

  beforeEach(() => {
    calc = new Calculatrice();
  });

  describe('addition', () => {
    it('devrait retourner laddition de deux nombres', () => {
      assert.equal(calc.addition(1, 3), 4);
    });
  });

  describe('soustraction', () => {
    it('devrait retourner la soustraction de deux nombres', () => {
      assert.equal(calc.soustraction(10, 5), 5);
    });
  });

  describe('division', () => {
    it('devrait retourner la division de deux nombres', () => {
      assert.equal(calc.division(10, 2), 5);
    });

    it('devrait retourner une erreur si le diviseur est égal à zéro', () => {
      assert.throws(() => calc.division(10, 0), 'Division par zéro impossible');
    });
  });

  describe('multiplication', () => {
    it('devrait retourner la multiplication de deux nombres', () => {
      assert.equal(calc.multiplication(3, 4), 12);
    });
  });
});
