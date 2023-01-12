import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/products/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  constructor(private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar){}
  productForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  });

  createProduct() {
    console.log("holaa")
    console.log(
      this.productForm.value
    )
    this.productService.createProduct(this.productForm.value).subscribe((data) => {
      this.snackBar.open("Producto creado exitosamente!", "Creacion!")
    },(err) => this.snackBar.open("Error el id ingresado ya existe ", "Creacion!") )
  }

  returnToSummary() {
    this.router.navigate(['']);
  }
}
