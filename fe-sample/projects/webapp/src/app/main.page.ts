import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatAll, tap} from "rxjs/operators";
import {concat} from "rxjs";


export interface HostResponse {
  status: string;
  message: string;
}

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class MainPage {

  status = 'N/A';
  message = 'N/A';
  date: Date = new Date();

  constructor(private httpClient: HttpClient) { }

  makeAjaxRequest(): void {
    this.httpClient.get<any>('/assets/config.json')
      .pipe(
        tap((config) => {
          console.log('*** config', config);
          this.httpClient.get<HostResponse>(`${config.host}/test`)
            .subscribe((r) => {
              console.log('response', r);
              this.date = new Date();
              this.status = r.status;
              this.message = r.message;
            });
        })
      ).subscribe();
  }

  makeAjaxRequest2(): void {
    this.httpClient.get<any>('/assets/config.json')
      .pipe(
        tap((config) => {
          console.log('*** config', config);
          this.httpClient.get<HostResponse>(`${config.host}/check`)
            .subscribe((r) => {
              console.log('response', r);
              this.date = new Date();
              this.status = r.status;
              this.message = r.message;
            });
        })
      ).subscribe();
  }
}
