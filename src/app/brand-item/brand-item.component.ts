import { Component, EventEmitter, Input, Output } from '@angular/core';
import { brand } from '../shared/interfaces/brands';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent {

  @Input() brand:brand = {} as brand;
  @Output() image:EventEmitter<string>= new EventEmitter();
  @Output() name:EventEmitter<string>= new EventEmitter();
  @Output() slug:EventEmitter<string>= new EventEmitter();

  sendData(img:string,name:string,slug:string){
    this.image.emit(img);
    this.name.emit(name);
    this.slug.emit(slug);
  }

}
