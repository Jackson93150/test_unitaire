export class User {
  email: string;
  nom: string;
  prenom: string;
  age: number;

  constructor(email: string, nom: string, prenom: string, age: number) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  isValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(this.email)) {
      return false;
    }
    if(this.age < 13) {
      return false; 
    }
    if(!this.nom || !this.prenom) {
      return false;
    }
    return true;
  }
}
