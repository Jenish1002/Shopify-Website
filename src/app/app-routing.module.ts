import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FootwearComponent } from './footwear/footwear.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { StationeryComponent } from './stationery/stationery.component';
import { GroceryComponent } from './grocery/grocery.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'accessories', component: AccessoriesComponent},
  { path: 'appliances', component: AppliancesComponent},
  { path: 'clothes', component: ClothesComponent},
  { path: 'electronics', component: ElectronicsComponent},
  { path: 'footwear', component: FootwearComponent},
  { path: 'furniture', component: FurnitureComponent},
  { path: 'grocery', component: GroceryComponent},
  { path: 'jewellery', component: JewelleryComponent},
  { path: 'mobiles', component: MobilesComponent},
  { path: 'stationery', component: StationeryComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AccessoriesComponent, AppliancesComponent, ClothesComponent, ElectronicsComponent,
    FootwearComponent, FurnitureComponent, GroceryComponent, JewelleryComponent, MobilesComponent, 
  StationeryComponent, PaymentComponent, SignupComponent,  HomeComponent,ContactComponent,
  AboutComponent, RegisterComponent   ]