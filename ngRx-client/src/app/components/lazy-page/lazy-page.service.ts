import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Parts} from './lazy-page';
import {User} from '../home/home';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  public getParts(): Observable<Parts[]> {
    return this.http.get<Parts[]>(`${this.apiServerUrl}/parts/all_part`);
  }
  public addParts(part: Parts): Observable<Parts> {
    return this.http.post<Parts>(`${this.apiServerUrl}/parts/add_part`, part);
  }
  public updateParts(partId: number, part: Parts): Observable<Parts> {
    return this.http.put<Parts>(`${this.apiServerUrl}/parts/update_part/${partId}`, part);
  }
  public deleteParts(partId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/parts/delete_part/${partId}`);
  }
}
