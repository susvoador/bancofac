import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc  } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Note{
  id?: string;
  title: string;
  text: string;
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getNotes(): Observable<Note[]> {
     const notesRef =  collection(this.firestore, 'notes');
     return collectionData(notesRef, {idField: 'id'}) as Observable<Note[]>;
  }
  getNoteById(id: any): Observable<Note> {
    const noteDocRef =  doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as Observable<Note>;
 }}
