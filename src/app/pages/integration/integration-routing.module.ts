import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurrentIntegrationComponent } from './pages/current-integration/current-integration.component';
import { IntegrationMessageComponent } from './pages/integration-message/integration-message.component';
import { IntegrationConfigurationComponent } from './pages/integration-configuration/integration-configuration.component';
import { IntegrationMappingComponent } from './pages/integration-mapping/integration-mapping.component';
import { IntegrationCustomCodeComponent } from './pages/integration-custom-code/integration-custom-code.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: CurrentIntegrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'messages'
      },
      {
        path: 'messages',
        component: IntegrationMessageComponent
      },
      {
        path: 'configuration',
        component: IntegrationConfigurationComponent
      },
      {
        path: 'mapping',
        component: IntegrationMappingComponent
      },
      {
        path: 'code',
        component: IntegrationCustomCodeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
