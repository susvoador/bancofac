import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes:any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res); 
      this.notes = res; 
    })

}
}
