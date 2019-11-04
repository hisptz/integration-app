import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationMessageComponent } from './integration-message.component';

describe('IntegrationMessageComponent', () => {
  let component: IntegrationMessageComponent;
  let fixture: ComponentFixture<IntegrationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
