import { Component,OnInit } from '@angular/core';
import { CovidReportService } from '../covid-report.service';
import { TreeNode } from 'primeng/api';
import { NodeserviceService } from '../nodeservice.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit{
  covidData:any;
  files1!: TreeNode[];

  files2!: TreeNode[];

  cols!: any[];
rowNode: any;
  constructor(private _getCovidServiceUrl:CovidReportService,private nodeService:NodeserviceService){

  }
  ngOnInit(): void {
    // this.getCovidUrl();
    this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
  }

  getCovidUrl(){
    this._getCovidServiceUrl.getCovidReportData().subscribe(
      (res) => {
        this.covidData = res;
      }
    );
  }
}
