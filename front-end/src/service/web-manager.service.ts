import {Injectable} from "@angular/core";
import {UserVisibleFormService} from "./user-visible-form.service";
import {UserApiService} from "./user.api.service";
import {UserSessionService} from "./user-session.service";
import {NewsApiService} from "./news.api.service";
import {NewsManagerService} from "./news-manager.service";

@Injectable({
  providedIn: 'root',
})
export class WebManagerService{

  constructor( private userVisibleForm: UserVisibleFormService,
               private userApi: UserApiService,
               private newsApi: NewsApiService,
               private userSession: UserSessionService,
               private newsManager: NewsManagerService,) {}


  public getEventChangeVisibleFormUser(){
    return this.userVisibleForm.eventVisibleFormUser
  }

  public setParamVisibleFormUser(){
    this.userVisibleForm.setValueVisibleFormUser()
  }

  public setParamDataUserSession(value: any){
    this.userSession.setDataUserToSession(value)
  }

  public clearSessionUser(){
    this.userSession.clearSessionUser()
  }

  public getDataUserSession(){
    return this.userSession.getDataSession()
  }

  public selectCurrentNews(value: any){
      this.newsManager.updateDataCurrentNews(value)
  }

  public findScreenshotsCurrentNews(news: any){
      return this.newsApi.getScreenshotByNews(news)
  }

  public dataSelectedNews(){
    return this.newsManager.getDataNews()
  }

  public sendSignInParam(value: any){
    return this.userApi.getResultSignIn(value)
  }

  public sendRegistrationInParam(value: any) {
    return this.userApi.getResultRegistrationUser(value)
  }

  public sendMoneyToAnotherUser(anotherUser: any){
    return this.userApi.requestSendMoneyToAnotherProfile(anotherUser,this.getDataUserSession())
  }

  public infoUser(){
    return this.userApi.requestUser(this.userSession.getDataSession())
  }

  public getResultNews(){
    return this.newsApi.getNewsPage()
  }


}
