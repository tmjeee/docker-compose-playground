import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const HOST_PREFIX = `http://localhost:8889`;

export interface HostResponse {
  status: string,
  message: string,
}

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage {

  status: string = 'N/A';
  message: string = 'N/A';
  date: Date = new Date();

  constructor(private httpClient: HttpClient) { }

  makeAjaxRequest() {
    this.httpClient.get<HostResponse>(`${HOST_PREFIX}/test`)
      .subscribe((r) => {
        this.date = new Date();
        this.status = r.status;
        this.message = r.message;
      });
  }
}
