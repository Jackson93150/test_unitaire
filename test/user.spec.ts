import { assert } from 'chai';
import { User } from '../src/user';

describe('User', () => {
  let user: User;

  describe('isValid email', () => {
    it('devrait retourner false si le mail na pas le bon format', () => {
      user = new User('jacksongmail.com','jackson','anthonipillai',21);
      assert.equal(user.isValid(), false);
    });
  });
  describe('isValid age', () => {
    it('devrait retourner false si lage indiqué nest pas lage requis', () => {
      user = new User('jackson@gmail.com','jackson','anthonipillai',12);
      assert.equal(user.isValid(), false);
    });
  });
  describe('isValid name', () => {
    it('devrait retourner false si les champs nom ou prenom ne sont pas indiqué sinon true', () => {
      user = new User('jackson@gmail.com','','anthonipillai',21);
      assert.equal(user.isValid(), false);
      user = new User('jackson@gmail.com','jackson','',21);
      assert.equal(user.isValid(), false);
    });
  });
  describe('isValid isvalid', () => {
    it('devrait retourner true si tous les champs sont valide', () => {
      user = new User('jackson@gmail.com','jackson','anthonipillai',21);
      assert.equal(user.isValid(), true);
    });
  });
});
