import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
 

  constructor(private auth : Auth) {}

  async register( reg : any) {
   try{
    const user = await createUserWithEmailAndPassword(
      this.auth,
      reg.email,
      reg.password
    );
    return user; 
   } catch (e) {
    return null;
   }
  }

  async login( log : any) {
    try{
      const user = await signInWithEmailAndPassword(
        this.auth,
        log.email, 
        log.password 
      );
      return user; 
     } catch (e) {
      return null;

  }
}
 
  logout() {
    return signOut(this.auth); 
  }
}
