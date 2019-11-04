import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationMappingComponent } from './integration-mapping.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IntegrationMappingComponent', () => {
  let component: IntegrationMappingComponent;
  let fixture: ComponentFixture<IntegrationMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationMappingComponent],
      imports: [BrowserAnimationsModule, MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
