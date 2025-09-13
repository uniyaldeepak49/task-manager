import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService<T> {
  /**
   * Save data in local storage
   * @param data
   */
  saveDataInLocalStorage(key: string, data: T) {
    const localStorageData: T = localStorage.getItem(key) as T;
    if (!localStorageData || JSON.stringify(data) !== localStorageData) {
      // data exists and is same as data is coming from...
      localStorage.setItem(key, JSON.stringify(data));
    }
  }
  /**
   * Returns data from local storage
   * @returns
   */
  getDataFromLocalStorage(key: string): T {
    let localStorageData: T = localStorage.getItem(key) as T;

    if (localStorageData) {
      localStorageData = JSON.parse(localStorageData as string);
    } else {
      localStorageData = false as T;
    }

    return localStorageData;
  }
}
