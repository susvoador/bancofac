import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes:any[] = [];

  constructor(private dataService: DataService, private alerCtrl: AlertController, private modalCltr: ModalController) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res); 
      this.notes = res; 
    })

}
  async openNote(note: any){
    const modal = await this.modalCltr.create({
      component: ModalPage,
      componentProps:  { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });
    modal.present();
  }

  async addNote() {
    const alert = await this.alerCtrl.create({
    header: 'add Note',
    inputs: [
      {
      name: 'title',
      placeholder: 'My cool note',
      type: 'text'
      },
      {
        name: 'text',
        placeholder: 'Learn Ionic',
        type: 'textarea'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Add',
        handler: (res) => {
          this.dataService.addNote({title: res.title, text: res.text});
        }
      }

    ]
    });
    await alert.present(); 
  }
}
