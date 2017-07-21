import {Component} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  template: `    
    <div class="container">
      <ul class="nav nav-tabs">
        <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]="['orders']">Orders</a></li>
        <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]="['reports']">Reports</a></li>
        <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]="['templates']">Report Templates</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `
})
export class DashboardComponent {}
