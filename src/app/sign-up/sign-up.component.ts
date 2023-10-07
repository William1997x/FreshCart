import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private _auth:AuthService,private _route:Router){};

  apiError:string='';
  isLoading:boolean=false;
  show:boolean=false;

  registerForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,8}$/)]),
    rePassword: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,8}$/)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
  },{
    validators:this.validateRePassword
  });

  sendForm(form:FormGroup){
   if(form.valid){
    this.isLoading=true;
    this._auth.register(form.value).subscribe({
      next:(res:any)=>{
        this.isLoading=false;
        this._route.navigate(['/login']);
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
    if(this.registerForm.invalid){
      this.show = true;
    }
    else {
      this.show = false;
    }
  }


  validateRePassword(registerForm:any){
    let passwordControl = registerForm.get("password");
    let rePasswordControl = registerForm.get("rePassword");
    if(passwordControl.value == rePasswordControl.value){
      return null;
    }else{
      rePasswordControl.setErrors({rePasswordNotMatch:"password and repassword not matched"});
      return {rePasswordNotMatch:"password and repassword not matched"};
    }
  }
}
