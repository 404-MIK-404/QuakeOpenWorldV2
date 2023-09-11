import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root',
})
export class NewsApiService{

  private static URL = 'http://localhost:8000'

  constructor(private http:HttpClient) {}

  getNewsPage(){
    return this.http.get<any>(NewsApiService.URL + "/news", httpOptions)
  }


  getScreenshotByNews(news: any){
    return this.http.post<any>(NewsApiService.URL + "/news-screenshots",news)
  }


}
