import { CartService } from './../shared/services/cart.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  cartId:string='';

  shippingDetails:FormGroup=new FormGroup({
    details:new FormControl('',[Validators.required,Validators.minLength(3)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
    city:new FormControl('',[Validators.required])
  })

  handleOnline(){
    this._cartService.generateOnlinePayment(this.cartId,this.shippingDetails.value).subscribe({
      next:res=>{
        console.log(res);
        
        if(res.status == 'success'){
        window.open(res.session.url);
      }}
      
    })
  }

  constructor(private _cartService:CartService){
    this._cartService.cartId.subscribe({
      next:res=>this.cartId=res
    })
  }


}
