import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NewsManagerService{

  private eventDataCurrentNews$ = new Subject<any>()

  private dataNews = undefined;

  constructor() {
  }

  public getEventDataCurrentNews(){
    return this.eventDataCurrentNews$
  }

  public getDataNews(){
    return this.dataNews
  }

  public updateDataCurrentNews(value: any){
    this.dataNews = value
    //this.eventDataCurrentNews$.next(value)
  }


}
