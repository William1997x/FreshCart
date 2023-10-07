import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _http:HttpClient) { }

  addToWishList(productId:string):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
      "productId": productId,
    });
  }

  removeFromWishList(productId:string):Observable<any>{
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`);
  }

  getWishList():Observable<any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/wishlist');
  }

}
