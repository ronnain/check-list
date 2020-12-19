import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  save(key:string, object:any) {
    console.log(key, object);

    this.saveInLocalStorage(key, object);
  }

  retrieveData(key:string) {
    return this.retrieveLocalStorage(key);
  }

  private saveInLocalStorage(key:string, object:any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  private retrieveLocalStorage(key:string) {
    const object = localStorage.getItem(key);
    return object ? JSON.parse(object) : null;
  }
}
