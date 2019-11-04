import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { components } from './components';
import { HomeRoutingModule } from './integration-routing.module';
import { pages } from './pages';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...pages, ...components],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MonacoEditorModule,
    HomeRoutingModule
  ]
})
export class IntegrationModule {}
