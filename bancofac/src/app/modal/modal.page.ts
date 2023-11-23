import { Component, Input, OnInit } from '@angular/core';
import { DataService, Note } from '../services/data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input()
  id!: string;
  note: Note | null = null;
  constructor(private dataService: DataService, private modalCtrl: ModalController) { }
  
  ngOnInit() {
    this.dataService.getNoteById(this.id).subscribe(res => {
    this.note = res;    
    });
  }

}
