import {Injectable} from "@angular/core";
import {UserSessionService} from "./user-session.service";
import {NewsManagerService} from "./news-manager.service";

@Injectable({
  providedIn: 'root',
})
export class EventsManagerService{

  constructor(private userSession: UserSessionService,
              private newsManager: NewsManagerService,) {}


  public eventUpdateSession(){
    return this.userSession.getEventSession();
  }

  public eventSelectCurrentNews(){
    return this.newsManager.getEventDataCurrentNews()
  }



}
