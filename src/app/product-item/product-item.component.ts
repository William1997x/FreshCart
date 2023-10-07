import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from '../shared/services/wish-list.service';
import { WishList } from '../shared/interfaces/wishlist';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  fullTitle:boolean=false;
  // wishList:boolean = false;
  // wishList:BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  
  @Input() product:Product = {} as Product;  // to initialize the product as object of product interface

  @Input() wishArr:string[]=[];
 

  constructor(
    private _cartService:CartService,
    private _toastr: ToastrService,
    private _wishList:WishListService
    ){}

    ngOnInit(): void {
        
    }

  displayFullTitle(e:any){
    e.stopPropagation();
    e.preventDefault();
    this.fullTitle = !this.fullTitle;
  }
  

  addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe(
      {
        next:(res)=>{
          this._cartService.numOfCartItems.next(res.numOfCartItems)
          this._toastr.success(res.message)
        
        },
        
      }
    )
  }
  
  addToWishList(id:string){
    this._wishList.addToWishList(id).subscribe({
      next:res=>{
        this._toastr.success("it has been successfully added")
        this.wishArr=res.data;
      },
    })
  }

  removeFromWishList(id:string){
    this._wishList.removeFromWishList(id).subscribe({
      next:res=>{
        this._toastr.success("it has been successfully removed");
        this.wishArr=res.data;
      }
    })
  }


}
