import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from 'src/app/shared/service/products/product.service';
import { MaterialModule } from '../material-ui/material.module';
import { SummaryComponent } from 'src/app/component/products/summary/summary.component';
import { CreateProductComponent } from 'src/app/component/products/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockModalComponent } from 'src/app/component/products/stock-modal/stock-modal.component';

@NgModule({
  declarations: [
    SummaryComponent,
    CreateProductComponent,
    StockModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
