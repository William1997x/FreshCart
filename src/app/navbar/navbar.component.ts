import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from '../shared/services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/interfaces/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  numOfCartItems:number = 0;
  isLoggedIn:boolean = false;


  constructor(private _auth:AuthService,
    private _cartService:CartService
    ){
    
    _auth.userData.subscribe(
      (res)=>{
        if(_auth.userData.getValue()){
          this.isLoggedIn = true;
        }else {
          this.isLoggedIn = false;
        }
      }
    );

    _cartService.numOfCartItems.subscribe({
      next:res=>this.numOfCartItems=res,
      
    })
   }

   logOut(){
    this._auth.logOut();
   }

   ngOnInit(): void {
    
   }


  
}
