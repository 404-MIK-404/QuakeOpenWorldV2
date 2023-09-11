import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserVisibleFormService{

  visibleFormUser: boolean = false

  private _eventVisibleFormUser: Subject<any> = new Subject<any>();

  constructor() {}

  get eventVisibleFormUser(): Subject<any> {
    return this._eventVisibleFormUser;
  }


  setValueVisibleFormUser(){
    this.visibleFormUser = !this.visibleFormUser
    this._eventVisibleFormUser.next(this.visibleFormUser)
  }

}
