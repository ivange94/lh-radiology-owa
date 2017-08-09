import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  template: `
    <div class="autocomplete">
      <input type="text" [(ngModel)]="query" (keyup)="search()" placeholder="{{placeholder}}" class="form-control">
      <ul *ngIf="searchResults.length > 0" class="item">
        <li *ngFor="let item of searchResults" (click)="select(item)">{{item.display}}</li>
      </ul>
    </div>
  `,
  styles: [
      `
      .autocomplete {
        background-color: transparent;
      }

      ul.item {
        list-style-type: none;
        border: 1px solid #ccc;
        background-color: #fff;
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        animation: slideDown 0.1s;
      }

      ul.item li {
        padding: 2px 5px;
        border-bottom: 1px solid #eee;
      }

      ul.item li:last-child {
        border-bottom: none;
      }

      ul.item li:hover {
        background-color: #ccc;
      }
    `
  ]
})
export class SearchComponent implements OnInit{

  query: string;

  searchResults: Res[] = [];

  @Input() placeholder: string;

  @Input() baseUrl: string;

  @Input() params: SearchParams[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  search() {
    if (this.query === "") {
      this.searchResults = [];
    }
    else {
      let url = this.baseUrl + "?q=" + this.query + "&v=full";
      if (this.params.length != 0) {
        for (let param of this.params) {
          url += ("&" + param.key + "=" + param.value)
        }
      }
      console.log(url);
      this.http.get<SearchRes>(url).subscribe(data => {
        this.searchResults = data.results;
      });
    }
  }

  select(item) {
    console.log(item);
    this.query = item.display;
    this.searchResults = [];
  }
}

interface Res {
  uuid: string;
  display: string;
}

interface SearchRes {
  results: Res[];
}

interface SearchParams {
  key: string;
  value: string;
}
