import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`

  constructor(private _http:HttpClient) { }

  forgotPassword(userEmail:object):Observable<any>{
    return this._http.post(this.baseUrl + 'forgotPasswords',userEmail)
  }

  resetCode(resetCode:object):Observable<any>{
    return this._http.post(this.baseUrl + 'verifyResetCode',resetCode)
  }

  resetPassword(newPass:object):Observable<any>{
    return this._http.put(this.baseUrl+'resetPassword',newPass);
  }

}
