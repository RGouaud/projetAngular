import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedTab: string = "tabAccueil";

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.selectedTab = 'tabAccueil';
            break;
          case '/intervention':
            this.selectedTab = 'tabIntervention';
            break;
          case '/formIntervention':
            this.selectedTab = 'tabForm';
            break;
          default:
            this.selectedTab = 'tabAccueil';
            break;
        }
      }
    });
  }
}
