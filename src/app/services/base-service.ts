import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  public http = inject(HttpClient);

  public static API_BASE_URL = 'https://68c786805d8d9f51473211ab.mockapi.io/api/v1';

  /**
   * Post data in backend service.
   * @param data
   * @param serviceName
   */
  post<T>(data: T, serviceName: string): void {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    this.http.post<T>(url, { data });
  }
  /**
   * Gets data from Backend service.
   * @param serviceName
   * @returns {Observable<T>}
   */
  get(serviceName: string): Observable<T> {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    return this.http.get(url).pipe(
      map((response) => {
        return response as T;
      })
    );
  }
  /**
   * Post data in backend service.
   * @param data
   * @param serviceName
   */
  put<T>(data: T, serviceName: string): void {
    const url = `${BaseService.API_BASE_URL}/${serviceName}`;
    this.http.put<T>(url, { data });
  }
  /**
   * Deletes the data from service.
   * @param data
   * @param serviceName
   * @returns {Observable<T>}
   */
  delete(data: T, serviceName: string): Observable<T> {
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
