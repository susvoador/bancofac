import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes = [];

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res); 
      this.notes = res; 
    })
  }

}
