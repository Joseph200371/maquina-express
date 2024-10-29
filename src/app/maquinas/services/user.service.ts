import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public $refreshToken = new Subject<boolean>;
  public $refreshTokenReceived = new Subject<boolean>;

  constructor(private http: HttpClient) {

    this.$refreshToken.subscribe((res:any)=> {
      this.getRefreshToken()
    })
   }

  onLogin(obj: any)   {
    /*const headers = {'Content-Type':'application/json',
                     'Access-Control-Allow-Origin': '*',
                     "Access-Control-Max-Age":"3600",
                     "Access-Control-Allow-Headers":" Origin, X-Requested-With, Content-Type, Accept, Authorization",

                     *//*
    const headers = new HttpHeaders();                
    headers.set('Content-Type','application/json')      
    .set('Access-Control-Allow-Origin', '*')   
    .set("Access-Control-Max-Age","3600")   
    .set("Access-Control-Allow-Headers"," Origin, X-Requested-With, Content-Type, Accept, Authorization");   
    headers.set('Content-Type','application/json');   
    headers.set('Content-Type','application/json');          
                      */
                  
    return this.http.post("http://localhost:8090/login", obj, {'headers':{'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Max-Age":"3600",
      "Access-Control-Allow-Headers":" Origin, X-Requested-With, Content-Type, Accept, Authorization"}} )
  }

  getRefreshToken()   {
    debugger;
    let loggedUserData : any;
    const localData =   localStorage.getItem('angular17TokenData');
    if(localData != null) {
      loggedUserData =  JSON.parse(localData);
    }
    const obj = {
      "emailId":  localStorage.getItem('angular17TokenEmail'),
      "token": "",
      "refreshToken": loggedUserData.refreshToken
    };
    this.http.post("https://freeapi.gerasim.in/api/JWT/refresh", obj).subscribe((Res:any)=>{
      localStorage.setItem('angular17TokenData', JSON.stringify(Res.data));
      this.$refreshTokenReceived.next(true);
    })
  }
 
  getUsers()   {
    return this.http.get("https://localhost:44355/api/ClientStrive/GetAllEmployee")
  }
}