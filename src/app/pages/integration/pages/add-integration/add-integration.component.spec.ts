import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddIntegrationComponent } from "./add-integration.component";
import { MatInputModule, MatDialogModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe("AddIntegrationComponent", () => {
  let component: AddIntegrationComponent;
  let fixture: ComponentFixture<AddIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddIntegrationComponent],
      imports: [MatInputModule, MatDialogModule, MatSelectModule, BrowserAnimationsModule, MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
