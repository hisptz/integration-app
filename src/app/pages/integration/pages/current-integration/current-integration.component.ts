import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { back } from 'src/app/store/actions';

@Component({
  selector: 'app-current-integration',
  templateUrl: './current-integration.component.html',
  styleUrls: ['./current-integration.component.css']
})
export class CurrentIntegrationComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onBack(e) {
    e.stopPropagation();
    this.store.dispatch(back());
  }
}
