import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListcomponent } from './product-list.component';
import { ProductDetailGuard } from "./ProductDetailGuard";
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListcomponent,
     ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products', component: ProductListcomponent}
      ,{path: 'products/:id', 
        canActivate: [ProductDetailGuard],
      component: ProductListcomponent}
    ])
  ]
})
export class ProductModule { }
