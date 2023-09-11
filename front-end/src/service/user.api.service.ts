import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root',
})
export class UserApiService{

  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }

  private static URL = 'http://localhost:8080/api/quakeopenworld/v1'

  constructor(private http:HttpClient) {}

  public getResultSignIn(value: any){
    return this.http.post<any>(UserApiService.URL + "/sign-in-user", value)
  }

  public getResultRegistrationUser(value: any){
    return this.http.post<any>(UserApiService.URL + "/registraion-user", value)
  }

  public requestUser(profile: any){
    return this.http.get<any>(UserApiService.URL + "/me", { headers: this.createHeaderUser(profile) })
  }



  requestSendMoneyToAnotherProfile(value: any,profile: any){
    return this.http.post<any>(UserApiService.URL + "/send-money",value, { headers: this.createHeaderUser(profile) })
  }


  private createHeaderUser(profile: any){
    let tok = JSON.parse(profile)
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tok.result
    });
  }

}
