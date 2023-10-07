import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private _auth:AuthService,private _route:Router){};

  apiError:string='';
  isLoading:boolean=false;
  show:boolean=false;

  loginForm : FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,8}$/)]),
  });



  sendForm(form:FormGroup){
   if(form.valid){
    this.isLoading=true;
    this._auth.logIn(form.value).subscribe({
      next:(res:any)=>{
        this.isLoading=false;
        localStorage.setItem("userToken",res.token);
        this._auth.getUserData();
        this._route.navigate(['/home']);
      },
      error:(err:any)=>{
        console.log(err);
        this.apiError = err.error.message;
        
      },
      complete:()=>console.log("Done")
    });
   }
  }

  checkValues(){
    if(this.loginForm.invalid){
      this.show = true;
    }
    else {
      this.show = false;
    }
  }
}
