import { Component, OnInit } from '@angular/core';
import { WishListService } from '../shared/services/wish-list.service';
import { BehaviorSubject } from 'rxjs';
import { WishList } from '../shared/interfaces/wishlist';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList:WishList[]=[];
  constructor(
    private _wishListService:WishListService,
    private _toastr: ToastrService,
    private _cartService:CartService
    ){}

  ngOnInit(): void {
      this.getWishList();
  }

  getWishList(){
    this._wishListService.getWishList().subscribe({
      next:res=>{
        this.wishList=res.data;
        console.log(this.wishList);
      },
      
    })
  }

  removeFromWishList(id:string){
    this._wishListService.removeFromWishList(id).subscribe({
      next:res=>{
        this._toastr.success("it has been successfully removed");
        this.getWishList();
      }
    })
  }

  addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
      next:res=>this._toastr.success(res.message),
      
    })
  }
}
