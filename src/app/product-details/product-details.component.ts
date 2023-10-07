import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/core/interfaces/product';
import { ProductsService } from 'src/core/services/products.service';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }





  productId:string='';
  productDetails:Product = {} as Product;
constructor(
  private _activatedRoute:ActivatedRoute,
  private _productService:ProductsService,
  private _cart:CartService,
  private _toastr: ToastrService
  ){
  this._activatedRoute.paramMap.subscribe({
    next:(res:any)=>{this.productId= res.params.id;
    }
  })
  console.log(this.productId);
  
  this.getDetails();
}


getDetails(){
  this._productService.getProductsById(this.productId).subscribe({
    next:(res)=>{this.productDetails = res.data;
    }
  })
}



addToCart(id:string){
  this._cart.addProductToCart(id).subscribe({
    next:(res)=>{
      this._toastr.success(res.message)
    }
  })
}

}
