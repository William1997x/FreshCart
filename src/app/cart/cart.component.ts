import { Cart } from './../shared/interfaces/cart';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartProudcts:Cart = {} as Cart;
  constructor(
    private _cartService:CartService
  ){
    
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this._cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartProudcts=res;
      }
    })
  }

  updateCount(id:string,count:number){
  if(count>0){
    this._cartService.UpdateProductCount(id,count).subscribe({
      next:res=>this.cartProudcts=res,
    })
  }
  }

  removeProduct(id:string){
    this._cartService.removeProductItem(id).subscribe({
      next:res=>{this.cartProudcts=res
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }

  clear(){
    this._cartService.clearCart().subscribe({
      next:res=>{
        if(res.message == "success"){
          this.cartProudcts = {} as Cart;
        }
      },
      
    })
  }

}
