import { Pipe, PipeTransform } from '@angular/core';
import { WishList } from './shared/interfaces/wishlist';

@Pipe({
  name: 'wish'
})
export class WishPipe implements PipeTransform {

  transform(id: string, arr: WishList[]): boolean {
    let filteredArr=arr.filter(wish =>wish.id == id);
    if(filteredArr.length > 0){
      return true;
    }else{
      return false;
    }
  }

}
