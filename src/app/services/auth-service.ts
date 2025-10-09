import { UserPayload } from './../interfaces/user-payload';
import { inject, Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { CommonService } from './common-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  private commonService = inject(CommonService);
  userLoginToken = new BehaviorSubject(!!this.commonService.getDataFromLocalStorage('userToken'));
  isLoggedIn$ = this.userLoginToken.asObservable();
  constructor() {
    super();
  }
  /**
   * Logs in the user.
   * @param payload
   * @returns {Observable<T>}
   */
  login<T>(payload: UserPayload): Observable<T> {
    return this.post(payload, 'login').pipe(
      map((response) => {
        this.userLoginToken.next(true);
        this.commonService.saveDataInLocalStorage('userToken', response.token);
        this.commonService.saveDataInLocalStorage('user', response.user);
      }),
      catchError((error) => {
        throw new Error(error);
      })
    ) as Observable<T>;
  }
}
