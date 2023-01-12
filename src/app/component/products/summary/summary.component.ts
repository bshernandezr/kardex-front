import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/service/products/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StockModalComponent } from '../stock-modal/stock-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Product[] = [];
  datasource: Product[] = [];
  displayedColumns = ['id', 'description', 'stock', 'category'];
  page: number = 1;
  totalHits: number = 0;

  constructor(private productService: ProductService,
    private router: Router,
    private dialog: MatDialog) {

  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) =>  {
      console.log(res)
      this.summary = res.data.list;
      this.datasource = this.summary;
      this.totalHits = res.data.totalHits;
    })
  }

  addPage() {
    this.page++;
    this.refreshList();
  }

  subtractPage() {
    this.page--;
    this.refreshList();
  }

  refreshList() {
    this.productService.getProducts(this.page-1 > 0 ? this.page - 1: 0, 5).subscribe((res) =>  {
      console.log(res)
      this.summary = res.data.list;
      this.datasource = this.summary;
      this.totalHits = res.data.totalHits;
    })
  }

  isPageZero() {
    return this.page <= 1;
  }

  isMaxPage() {
    return this.page >= Math.ceil(this.totalHits/5);
  }

  navigateToCreate() {
    this.router.navigate(['product'])
  }

  openStockDialog(product: any, operation: string) {
    let dialogRef = this.dialog.open(StockModalComponent, {
      height: '400px',
      width: '600px',
      data: {...product, operation}
    });

    dialogRef.afterClosed().subscribe(() => this.refreshList())
  }



}
