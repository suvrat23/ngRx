import {Component, Injectable, OnInit, Output, EventEmitter} from '@angular/core';

import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../home/home';
import {UserService} from '../home/home.service';
import {ConfirmationService, MessageService} from 'primeng';
import {HomeComponent} from '../home/home.component';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, take} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {login} from '../../state/login/login.actions';
import {Observable, Subscription} from 'rxjs';
import {selectLoggedIn, selectError} from '../../state/login/login.selector';
import {getLocaleFirstDayOfWeek} from '@angular/common';
import {authReducer, AuthState} from '../../state/login/login.reducer';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
  providers: [ConfirmationService, MessageService]
})
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterComponent implements OnInit {
  loginDialogBox = false;
  openSesame = false;
  // private currentRoute: string;
  loggedIn: boolean;

  private _user1: HomeComponent;
  loggedIn$: Observable<boolean>;

  constructor(private userService: UserService, private confirmationService: ConfirmationService,
              private messageService: MessageService, user1: HomeComponent, private router: Router,
              private store: Store<AuthState>) {
    this.loggedIn$ = this.store.pipe(select(selectLoggedIn));

    this._user1 = user1;
    this.addUser = {} as User;
  }
  public addUser: User;
  ngOnInit(): void {
    this._user1.getUser();
  }
  OpenRegisterDialogBox(visible: boolean) {
    this.addUser.username = '';
    this.addUser.password = '';
    this.addUser.first_name = '';
    this.addUser.email = '';
    this.addUser.gmin = null;
    this.addUser.company_name = '';
    this.addUser.last_name = '';
    this.openSesame = visible;
  }
  OpenLoginDialogBox(visible: boolean) {
    this.addUser.username = '';
    this.addUser.password = '';
    this.loginDialogBox = visible;
  }
  // loginUser() {
  //   this.userService.getLogin(this.addUser.username, this.addUser.password).subscribe(
  //     (response: User) => {
  //       // Successful login
  //       this._user1.getUser();
  //       this.loginConfirmation('You are logged in :)', 'success');
  //       this.router.navigate(['/home']);
  //     },
  //     (error: HttpErrorResponse) => {
  //       // Unsuccessful login
  //       this.loginConfirmation('Login failed. Please try again :(', 'error');
  //     }
  //   );
  //   this.loginDialogBox = false;
  // }
  loginUser() {
    const { username, password } = this.addUser;
    this.store.dispatch(login({ username, password }));

    this.store.pipe(select(selectLoggedIn))
      .pipe(take(2))
      .subscribe((loggedIn) => {
        // console.log(loggedIn);
        if (loggedIn) {
          this._user1.getUser();
          this.loginConfirmation('You are logged in :)', 'success');
          this.router.navigate(['/home']);
        } else {
          this.loginConfirmation('Please try again or Register :(', 'error');
        }
      });
    this.loginDialogBox = false;
  }
  add_User(user: User): void {
    this.userService.addUser(user).subscribe(
      (response: User) => {
        this._user1.getUser();

        this.loginConfirmation('You are a registered user :)', 'success');
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 409) {
          this.loginConfirmation('You are already registered. Please login.', 'error');
        } else {
          this.loginConfirmation('User registration failed. Please try again :(', 'error');
        }

      }
    );
    this.openSesame = false;
  }

  loginConfirmation(message: string, severity: string): void {
    this.messageService.add({ severity: severity, summary: 'Login: ', detail: message });
  }
  isHomeRoute(): boolean {

    return this.router.url === '/login-register';
  }
}
