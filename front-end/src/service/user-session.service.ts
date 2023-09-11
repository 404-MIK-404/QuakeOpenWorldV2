import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {

  private eventUserSession$ = new Subject<any>()

  constructor() {}

  public setDataUserToSession(value: any){
    sessionStorage.setItem("user",JSON.stringify(value))
    this.eventUserSession$.next(value)
  }

  public getEventSession(){
    return this.eventUserSession$
  }

  public getDataSession(){
    return sessionStorage.getItem("user")
  }

  public clearSessionUser(){
    sessionStorage.removeItem("user")
    this.eventUserSession$.next(null)
  }

}
