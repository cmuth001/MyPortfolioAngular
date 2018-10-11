import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  transition,
  trigger,
  state,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        group([
          query(':leave', [
            animate('0ms ease', style({ opacity:0, right: '100%'}))
          ]),
          query(':enter', [
            animate('600ms ease-out', style({ right: '0%'}))
          ])
        ]),
      ])
    ]) // register the animations
  ]
})
export class AppComponent {
  title = 'MyPortfolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  

} 
