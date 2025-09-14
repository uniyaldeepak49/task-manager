import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  /**
   * Save data in local storage (only if changed)
   */
  saveDataInLocalStorage<T>(key: string, data: T): void {
    const existing = this.getDataFromLocalStorage<T>(key);

    if (!existing || JSON.stringify(existing) !== JSON.stringify(data)) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  /**
   * Get parsed data from local storage
   */
  getDataFromLocalStorage<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  }

  /**
   * Remove an item from local storage
   */
  removeDataFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear all local storage
   */
  clearLocalStorage(): void {
    localStorage.clear();
  }
}
