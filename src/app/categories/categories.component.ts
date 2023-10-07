import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/core/interfaces/category';
import { ProductsService } from 'src/core/services/products.service';
import { CategoriesService } from '../shared/services/categories.service';
import { CategoryItem } from '../shared/interfaces/categories';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  subCategories:BehaviorSubject<any>= new BehaviorSubject([]);
  categoryName:BehaviorSubject<string>= new BehaviorSubject('');
  allCategoreis:CategoryItem[]=[];
  

  constructor(private _categoriesService:CategoriesService){}
ngOnInit(): void {
  this.getCategories()
}

getCategories(){
  this._categoriesService.getCategories().subscribe({
    next:res=>this.allCategoreis=res.data,
    
  })
}

getSubCategories(id:string){
  this._categoriesService.getSpecificSubCategory(id).subscribe({
    next:res=>{
      this.subCategories.next(res.data);
    },
  })
}
setCategoryName(name:string){
this.categoryName.next(name);
}
}
