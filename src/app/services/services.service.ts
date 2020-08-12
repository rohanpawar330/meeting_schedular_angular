import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }



  getData(url): Observable<{}> {

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      "X-Requested-With": "XMLHttpRequest"
    }
    return this.http
      .get(url, { headers: headers })
      .pipe(
        map(res => res),
        catchError(res => res)
      );
  }


}
