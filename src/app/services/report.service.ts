import {Injectable, OnInit} from '@angular/core';
import {Report} from "../models/report";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReportService {

  private baseUrl: string = '/openmrs/ws/rest/v1/radiologyreport';

  constructor(
    private http: HttpClient
  ) { }

  fetch(startIndex: number, limit: number): Observable<Report[]> {
    let params = new HttpParams();
    params = params.set('startIndex',startIndex.toString()).set('limit',limit.toString()).set('v', 'full').set('totalCount', 'true');

    return this.http.get(this.baseUrl, {
      params
    })
      .map(res => res['results'] as Report[] || [] );
  }
}
