import { Injectable } from '@angular/core';

@Injectable()
export class AppStoreService {

  constructor () {

  }

  appStore: {} = {
    isOmniOpen: true,
    isLoggedIn: true
  }

  getAppStore() {

    return this.appStore;
  }
  
}
