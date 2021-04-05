import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit{
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer
  ) {}
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
  isDarkTheme: boolean = true; // ? notice this
  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? 'Dark' : 'light');
  }

  ngOnInit(){
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark'?true:false;
  }
}
