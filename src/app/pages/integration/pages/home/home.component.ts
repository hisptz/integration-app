import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { go } from 'src/app/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  integrations: any[];
  focusedIntegration: string;
  constructor(private store: Store<State>) {
    this.integrations = [
      {
        id: 1,
        name: 'DHIS2 ELMIS',
        type: 'RECEIVING'
      },
      {
        id: 2,
        name: 'DHIS2 VIMS',
        type: 'RECEIVING'
      },
      {
        name: 'DHIS2 HFR',
        type: 'RECEIVING'
      },
      {
        id: 3,
        name: 'DHIS2 HFR',
        type: 'RECEIVING'
      }
    ];
  }

  ngOnInit() {}

  onView(e, integration) {
    e.stopPropagation();
    this.store.dispatch(go({ path: ['/id'] }));
  }

  onDelete(e, id) {
    e.stopPropagation();
  }

  onRefresh(e, id) {
    e.stopPropagation();
  }

  onActivate(e, id) {
    e.stopPropagation();
  }

  onDeactivate(e, id) {
    e.stopPropagation();
  }

  onFocusIntegration(e, id: string) {
    e.stopPropagation();
    this.focusedIntegration = id;
  }

  onBlurIntegration(e, id: string) {
    e.stopPropagation();
    this.focusedIntegration = '';
  }
}
