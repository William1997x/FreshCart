import { Pipe, PipeTransform } from '@angular/core';
import { ProductItem } from '../shared/interfaces/cart';

@Pipe({
  name: 'controlCount'
})
export class ControlCountPipe implements PipeTransform {

  transform(value: ProductItem[]): ProductItem[] {
    return value.filter((item)=>item.count>0);
  }

}
