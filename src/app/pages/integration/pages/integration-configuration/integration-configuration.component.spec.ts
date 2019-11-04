import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationConfigurationComponent } from './integration-configuration.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IntegrationConfigurationComponent', () => {
  let component: IntegrationConfigurationComponent;
  let fixture: ComponentFixture<IntegrationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationConfigurationComponent],
      imports: [BrowserAnimationsModule, MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
