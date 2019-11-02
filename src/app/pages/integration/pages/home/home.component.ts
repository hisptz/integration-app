import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  integrations: any[];
  constructor() {
    this.integrations = [
      {
        name: 'DHIS2 ELMIS',
        type: 'RECEIVING'
      },
      {
        name: 'DHIS2 VIMS',
        type: 'RECEIVING'
      },
      {
        name: 'DHIS2 HFR',
        type: 'RECEIVING'
      },
      {
        name: 'DHIS2 HFR',
        type: 'RECEIVING'
      }
    ];
  }

  ngOnInit() {}
}
