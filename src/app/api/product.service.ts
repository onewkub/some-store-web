import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductDto } from '../dto/product.dto';
import { ProductQueryDto } from '../dto/productQuery.dto';
import { PaginationDataDto } from '../dto/paginationData.dto';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl; // Example API URL

  constructor(private http: HttpClient) {}

  getAll(query: ProductQueryDto): Observable<PaginationDataDto<ProductDto>> {
    return this.http.get<PaginationDataDto<ProductDto>>(
      `${this.apiUrl}/Products`,
      {
        params: {
          ...query,
        },
      },
    );
  }
}
