import { inject, Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { catchError, map } from 'rxjs';
import { CommonService } from './common-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  private commonService = inject(CommonService);
  constructor() {
    super();
  }
  login(formData: any) {
    return this.post(formData, 'login').pipe(
      map((response) => {
        this.commonService.saveDataInLocalStorage('userToken', response?.token);
        this.commonService.saveDataInLocalStorage('userDetails', response?.user);
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
