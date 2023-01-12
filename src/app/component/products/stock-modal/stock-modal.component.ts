import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/shared/service/products/product.service';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.scss']
})
export class StockModalComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<StockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SummaryComponent,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {}

  value: number = 1
  idProduct: number = 0
  currentStock: number = 0
  operation: string = "descontar"


  ngOnInit(): void {
    this.value = 1
    console.log(this.data);
    const productInfo: any = this.data;
    this.idProduct = productInfo.id
    this.currentStock = productInfo.stock
    this.operation = productInfo.operation === 'add' ? "añadir" : "descontar";
  }


  addValue(){
    this.value++;
  }

  subtractValue(){
    this.value--;
  }

  subtractDisable() {
    return this.value < 2;
  }

  addDisable() {
    return this.currentStock === this.value && this.operation !== 'añadir' ;
  }

  submit() {
    this.productService.updateStockProduct({
      productId: this.idProduct,
      stock: this.operation === 'añadir' ? this.value : -this.value
    }).subscribe((data) =>  {
      this.snackBar.open("Producto actualizado exitosamente ", "Actualización!")
      this.dialogRef.close()
    })
  }


}
