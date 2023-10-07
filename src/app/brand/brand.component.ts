import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';
import { BrandsService } from '../shared/services/brands.service';
import { brand } from '../shared/interfaces/brands';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var window:any;

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  name:string='';
  img:string='';
  slug:string='';
  brands:brand[]=[];
  formModal:any;

  constructor(private _brand:BrandsService){
  };

  ngOnInit(): void {
      this.getBrands();
      this.formModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal')
      )
  }

  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }

  getBrands(){
    this._brand.getBrands().subscribe({
      next:res=>{
        this.brands=res.data;
      },
    })
  }

  getImg(img:string){
    this.img=img;
  }
  getName(name:string){
    this.name=name;
  }
  getSlug(slug:string){
    this.slug=slug;
  }

 
}
