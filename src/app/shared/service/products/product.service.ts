import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { CreateProductRequest, ProductListResponse } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }


  getProducts(page: number = 0, hitsPerPage: number = 5): Observable<ProductListResponse> {
    return this.httpClient.get<ProductListResponse>(`${environment.apiUrl}/api/v1/product?page=${page}&hitsPerPage=${hitsPerPage}`);
  }

  createProduct(request: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/v1/product`, request);
  }


  updateStockProduct(request: any) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/v1/product/stock`, request);
  }
}
