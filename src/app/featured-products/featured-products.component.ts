import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { ProductsService } from 'src/core/services/products.service';
import 'bootstrap'
import { WishListService } from '../shared/services/wish-list.service';
import { BehaviorSubject } from 'rxjs';
import { WishList } from '../shared/interfaces/wishlist';


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit, AfterViewChecked{
 
searchKey:string='';
allProducts: Product[] = [];
wishListarr:string[]=[];


constructor(
  private _productService:ProductsService,
  private _wishList:WishListService
  ){}

ngOnInit(): void {
  this.getAllProducts();
  this.getWishList();
}

ngAfterViewChecked(){
  

}

getAllProducts(){
  this._productService.getProducts().subscribe({
    next:(res)=>{
      this.allProducts = res.data;
    },

  });
}

getWishList(){
  this._wishList.getWishList().subscribe({
    next:res=>{
      this.wishListarr=res.data.map((wish:WishList)=>wish.id);
    },
    
  })
}
}
