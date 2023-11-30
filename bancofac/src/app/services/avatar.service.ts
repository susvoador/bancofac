import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera'; 

@Injectable({
  providedIn: 'root'
})
export class AvatarService {


  constructor(
    private auth: Auth, 
    private firestore: Firestore,
    private storage: Storage
  ) {}

  getUserProfile() {
     const user = this.auth.currentUser;
     const userDocRef = doc(this.firestore, `users/${user.uid}`)
  }

  async uploadImage(cameraFile: Photo) {}
  
}
