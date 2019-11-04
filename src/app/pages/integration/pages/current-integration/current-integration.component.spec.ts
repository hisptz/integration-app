import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentIntegrationComponent } from './current-integration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from 'src/app/store/effects';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('CurrentIntegrationComponent', () => {
  let component: CurrentIntegrationComponent;
  let fixture: ComponentFixture<CurrentIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentIntegrationComponent],
      imports: [
        RouterTestingModule,
        NgxDhis2HttpClientModule.forRoot({
          version: 1,
          namespace: 'iapps',
          models: {}
        }),
        MaterialModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
