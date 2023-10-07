import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/core/interfaces/category';
import { CategoriesService } from '../shared/services/categories.service';
import { CategoryItem } from '../shared/interfaces/categories';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit{
@Input() category:CategoryItem= {} as CategoryItem;

@Output() id:EventEmitter<string>= new EventEmitter();
@Output() categoryName:EventEmitter<string>= new EventEmitter()

constructor(private categoriesService:CategoriesService){}

ngOnInit(): void {
    
}


sendId(id:string,name:string){
  this.id.emit(id);
  this.categoryName.emit(name);
}

}
