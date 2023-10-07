import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShippingAdress } from '../interfaces/shipping-adress';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0);
  cartId:BehaviorSubject<string> = new BehaviorSubject('');



  constructor(private _http:HttpClient) { 
    this.getLoggedUserCart().subscribe({
      next:res=>{
        this.numOfCartItems.next(res.numOfCartItems);
        this.cartId.next(res.data._id);
      }
      
    })
  }


  addProductToCart(id:string):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/cart',{
      productId:id,
    });
  }

  getLoggedUserCart():Observable<any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/cart')
  }

  UpdateProductCount(id:string,count:number):Observable<any>{
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count:`${count}`
    })
  }

  removeProductItem(id:string):Observable<any>{
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }

  generateOnlinePayment(cartId:string,shippingAdress:ShippingAdress):Observable<any>{
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      "shippingAddress":shippingAdress
    })
  }

  clearCart():Observable<any>{
    return this._http.delete('https://ecommerce.routemisr.com/api/v1/cart')
  }
}
