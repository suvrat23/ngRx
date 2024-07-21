import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './home';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users/all`);
  }
  public getLogin(username: string, password: string): Observable<User> {
    // const body = { username: username, password: password };
    return this.http.get<User>(`${this.apiServerUrl}/users/login/${username}/${password}`);
  }
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/users/add`, user);
  }

  public updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/users/update/${userId}`, user);
  }
  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${userId}`);
  }


}
