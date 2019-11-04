import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationCustomCodeComponent } from './integration-custom-code.component';
import { EditorComponent } from '../../components/editor/editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

describe('IntegrationCustomCodeComponent', () => {
  let component: IntegrationCustomCodeComponent;
  let fixture: ComponentFixture<IntegrationCustomCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationCustomCodeComponent, EditorComponent],
      imports: [FormsModule, MonacoEditorModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationCustomCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
