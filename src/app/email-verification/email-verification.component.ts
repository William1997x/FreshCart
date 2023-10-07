import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotpassService } from 'src/core/services/forgotpass.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent {

  constructor(
    private _forgotpass:ForgotpassService,
    private _router:Router
    ){}

  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  email:string = "";
  userMsg:string='';

  forgotPassword:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })

  resetCode:FormGroup = new FormGroup({
    resetCode:new FormControl('',[Validators.required])
  })

  resetPassword:FormGroup = new FormGroup({
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,8}$/)])
  })

  forgotPasswordM():void{
    let userEmail = this.forgotPassword.value;
    this.email = userEmail.email;
    this._forgotpass.forgotPassword(userEmail).subscribe({
      next:res=>{
        this.userMsg=res.message;
        this.step1=false;
        this.step2=true;
      },
      error:err=>this.userMsg=err.error.message,
      
    })
  }

  resetCodeM():void{
    let resetCode = this.resetCode.value;
    this._forgotpass.resetCode(resetCode).subscribe({
      next:res=>{
        this.userMsg = res.status;
        this.step2=false;
        this.step3=true;
      },
      error:err=>{
        this.userMsg = err.error.message;
      }
    })
  }

  resetPasswordM():void{
    let newPass = this.resetPassword.value;
    newPass.email = this.email;
    this._forgotpass.resetPassword(newPass).subscribe({
      next:res=>{
        if(res.token){
          localStorage.setItem('userToken',res.token);
          this._router.navigate(['/home'])
        }
      },
      error:err=>this.userMsg=err.error.message
    })
  }

}
