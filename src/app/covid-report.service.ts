import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidReportService {

  // covidUrl:string = 'http://jsonplaceholder.typicode.com/posts';
  // covidUrl:string = 'https://data.covid19india.org/v4/min/timeseries.min.json';
  // covidUrl:string = 'https://data.covid19india.org/v4/min/data.min.json';
  // covidUrl:string = 'https://data.covid19india.org/data.json';
  covidUrl:string = 'https://data.covid19india.org/state_district_wise.json';

  constructor(private http:HttpClient) {}
  getCovidReportData(){
   return this.http.get(this.covidUrl);   
  }
}
