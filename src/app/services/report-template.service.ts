import { Injectable } from '@angular/core';
import {ReportTemplate} from "../models/report-template";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReportTemplateService {

  private baseUrl: string = "/openmrs/ws/rest/v1/mrrtreporttemplate";

  constructor(
    private http: HttpClient
  ) { }

  fetch(startIndex: number, limit: number): Observable<ReportTemplate[]> {
    let params = new HttpParams();
    params = params.set('startIndex',startIndex.toString()).set('limit',limit.toString()).set('v', 'full').set('totalCount', 'true');

    return this.http.get(this.baseUrl, {
      params
    })
      .map(res => res['results'] as ReportTemplate[] || []);
  }

  get(uuid: string): Observable<ReportTemplate> {
    let params = new HttpParams();
    params.set('v', 'full');
    return this.http.get(this.baseUrl + "/" + uuid, {
      params
    })
      .map(res => res as ReportTemplate || {});
  }
}
