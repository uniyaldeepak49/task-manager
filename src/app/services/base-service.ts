import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public http = inject(HttpClient);

  // public static API_BASE_URL = 'https://68c786805d8d9f51473211ab.mockapi.io/api/v1';
  public static API_BASE_URL = 'http://localhost:3000/api';

  /**
   * Post data in backend service.
   * @param data
   * @param serviceName
   */
  post<T>(data: T, serviceName: string): Observable<T> {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    return this.http.post(url, data) as Observable<T>;
  }
  /**
   * Gets data from Backend service.
   * @param serviceName
   * @returns {Observable<T>}
   */
  get<T>(serviceName: string): Observable<T> {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    return this.http.get(url).pipe(map((response) => response as T));
  }
  /**
   * Post data in backend service.
   * @param data
   * @param serviceName
   */
  put<T>(data: T, serviceName: string): Observable<T> {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    return this.http.get(url).pipe(map((response) => response as T));
  }
  /**
   * Deletes the data from service.
   * @param data
   * @param serviceName
   * @returns {Observable<T>}
   */
  delete<T>(data: T, serviceName: string): Observable<T> {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    return this.http
      .delete(url, {
        body: {
          data,
        },
      })
      .pipe(map((response) => response as T));
  }
}
