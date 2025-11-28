import { Component } from '@angular/core';
import { InsideAdmin } from '../inside-admin/inside-admin';

@Component({
  selector: 'app-admin',
  imports: [InsideAdmin],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  courseName: string = 'Angular';
  constructor() {
    console.log('Admin Component Loaded ' + this.courseName);
  }

}
