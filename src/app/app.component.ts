import { Component, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'container-tracking-system';
  
  @ViewChild('sidenav') sidenav?: MatSidenav;
  isSmallScreen? : boolean;
  
  buttonItems: { 
    icon: string, 
    text: string, 
    link: string 
  }[] = [
    { icon: 'add', text: 'New Order', link: '/' },
    { icon: 'account_circle', text: 'Update Maindata', link: '/profile' },
    { icon: 'settings', text: 'Payment List', link: '/settings' },
    { icon: 'help', text: 'Search Records', link: '/help' },
    { icon: 'home', text: 'Print Automated C.N.', link: '/' },
    { icon: 'account_circle', text: 'Client Billing', link: '/profile' },
    { icon: 'settings', text: 'Offhire Listing', link: '/settings' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      this.isSmallScreen = !result.matches;
    });
  }
}
