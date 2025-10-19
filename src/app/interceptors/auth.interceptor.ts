import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CommonService } from '../services/common-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const commonService = inject(CommonService);
  const router = inject(Router);
  const token = commonService.getDataFromLocalStorage('userToken');
  
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          commonService.removeDataFromLocalStorage('userToken');
          commonService.removeDataFromLocalStorage('userDetails');
          router.navigate(['/sign-in']);
        }
        return throwError(() => error);
      })
    );
  }
  
  return next(req);
};