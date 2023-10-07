import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/core/interfaces/category';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent implements OnInit{
  allCategories:Category[]=[];
  constructor(private _productService:ProductsService){}
ngOnInit(): void {
  this.getCategories();
  
  
}
getCategories(){
  this._productService.getCategories().subscribe({
    next:(cat)=>{this.allCategories=cat.data;}
  })
  
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  margin:5,
  responsive: {
    0: {
      items: 2
    },
    768:{
      items:4
    },
    992: {
      items:6
    }
   
  },
  nav: true
}
}
