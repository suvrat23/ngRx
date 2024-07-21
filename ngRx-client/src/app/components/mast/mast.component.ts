import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';


import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, pairwise} from 'rxjs/operators';
import {LoginRegisterComponent} from '../login-register/login-register.component';
import {User} from '../home/home';

@Component({
  selector: 'app-mast',
  templateUrl: './mast.component.html',
  styleUrls: ['./mast.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class MastComponent implements OnInit {
  navMenuItems: MenuItem[];
  userMenuItems: MenuItem[];
  showSidebar: boolean;
  showBreadcrumb: boolean;
  log: LoginRegisterComponent;
  // addUser: User;
  constructor(private router: Router, login: LoginRegisterComponent) {
    this.log = login;
    // this.addUser = {} as User;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(() => {
        this.showBreadcrumb = router.url !== '/home';
      });
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      pairwise()
    )
      .subscribe((value: [NavigationStart, NavigationStart]) => {
        this.showSidebar = false;
      });
  }
  // @Input() username: string;

  ngOnInit() {
    // this.username = this.log.addUser.username;
    this.navMenuItems = [
      {
        id: 'test', label: 'View More',
        items: [
          {id: 'lazyPage', label: 'Parts', routerLink: ['/lazy-page']},
          {id: 'userPage', label: 'Users', routerLink: ['/home']}
        ]
      }
    ];
    this.userMenuItems = [{
      label: 'USER UTILITIES',
      items: [
        {label: 'My Profile', url: '#', icon: 'fa fa-fw fa-user', disabled: true},
        {label: 'Settings', url: '#', icon: 'fa fa-fw fa-cog', disabled: true},
        {label: 'Sign Out', url: '#', icon: 'fa fa-fw fa-sign-out', disabled: false}
      ]
    }];
//
  }
}
//
//
