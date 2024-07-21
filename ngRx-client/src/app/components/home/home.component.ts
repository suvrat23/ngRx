import {Component, Injectable, OnInit} from '@angular/core';
import {User} from './home';
import {UserService} from './home.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ConfirmationService, MessageService]

})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {
  first = 0;
  rows = 10;
  loginDialogBox = false;
  openSesame = false;
  username: string;
  password: string;

  constructor(private userService: UserService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.addUser = {} as User;
  }
  public users: User[];
  public addUser: User;
  ngOnInit() {
    this.getUser();
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.users
      ? this.first === this.users.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }
  public getUser(): void {
    this.userService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

