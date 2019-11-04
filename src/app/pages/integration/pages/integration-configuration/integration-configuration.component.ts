import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration-configuration',
  templateUrl: './integration-configuration.component.html',
  styleUrls: ['./integration-configuration.component.css']
})
export class IntegrationConfigurationComponent implements OnInit {
  integrationTypes: any[];
  integrationStrategies: any[];
  contentTypes: any[];
  dataSources: any[];
  constructor() {}

  ngOnInit() {
    this.integrationTypes = [
      {
        id: 'PUSH',
        name: 'Push'
      },
      {
        id: 'PULL',
        name: 'Pull'
      },
      {
        id: 'RECEIVE',
        name: 'Receive'
      }
    ];

    this.integrationStrategies = [
      {
        id: 'PASS_THROUGH',
        name: 'Pass Through'
      },
      {
        id: 'MODIFY',
        name: 'Modify'
      }
    ];

    this.contentTypes = [
      {
        id: 'json',
        name: 'application/json'
      },
      {
        id: 'csv',
        name: 'application/csv'
      },
      {
        id: 'xml',
        name: 'application/xml'
      }
    ];

    this.dataSources = [
      {
        id: 'dataSet',
        name: 'Data set'
      },
      {
        id: 'program',
        name: 'Program'
      }
    ];
  }
}
