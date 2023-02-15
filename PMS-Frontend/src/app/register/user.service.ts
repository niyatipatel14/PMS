import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
   signUp(data:any): Observable<any> {
    return this.http.post(environment.urlAddress + 'api/user/signUp',data);
  }
  login(data:any):Observable<any>{
    return this.http.post(environment.urlAddress + 'api/user/signUp',data);
  }
}
