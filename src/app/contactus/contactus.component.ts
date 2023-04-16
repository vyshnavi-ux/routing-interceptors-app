import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Subject} from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  isLoading: Subject<boolean> = this.loader.isLoading;
  isLoadingShowC:boolean = false;
  showBtn:boolean = true;
  resData:any;
  resDataValues:any;
  getData:any;
  showTable:boolean = false;
  constructor(private loader: LoaderService, private http: HttpClient) {

  }
  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        setTimeout(() => {
          this.isLoadingShowC = false;
          this.showTable = true;
          this.showBtn = false;
        },5000);
        this.isLoadingShowC = true;
        this.showTable = false;
        this.showBtn = true;
        this.resData = data;
        this.resDataValues = Object.values(this.resData)
        // console.log(data);
        this.getData = this.resDataValues[4];
      })
  }
}
