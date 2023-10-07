import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './auth.guard';
import { signInGuard } from './sign-in.guard';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { WishListService } from './shared/services/wish-list.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"about",canActivate:[authGuard],component:AboutComponent},
  {path:"cart",canActivate:[authGuard],component:CartComponent},
  {path:"products",canActivate:[authGuard],component:FeaturedProductsComponent},
  {path:"brands",canActivate:[authGuard],component:BrandComponent},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent},
  {path:"checkout",canActivate:[authGuard],component:CheckOutComponent},
  {path:"allorders",canActivate:[authGuard],component:AllOrdersComponent},
  {path:"productDetails/:id",canActivate:[authGuard],component:ProductDetailsComponent},
  {path:"signup",canActivate:[signInGuard],component:SignUpComponent},
  {path:"login",canActivate:[signInGuard],component:SignInComponent},
  {path:"wishlist",canActivate:[authGuard],component:WishListComponent},
  {path:"forgot-password",canActivate:[signInGuard],component:EmailVerificationComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// loadChildren:()=> import('./setting/setting.module').then((x)=> x.SettingModule)