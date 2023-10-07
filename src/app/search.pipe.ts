import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/core/interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Product[],key: string): Product[] {
    return arr.filter((ele) => ele.title.toLowerCase().includes(key.toLowerCase()))
  }

}
