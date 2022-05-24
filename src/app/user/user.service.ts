import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _logged: boolean = false

  constructor() {
  }

  public get loggedValue(): any {
    return this._logged
  }
  public set loggedValue(value: boolean) {
    this._logged = value
  }

  public logout(): void {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('userData')
    this._logged = false
  }
}
