import { Component } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ProductCardComponent,
  ProductItem,
} from '../../components/product-card/product-card.component';
import { environment } from '../../../environments/environment';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { debounce } from 'lodash';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProductCardComponent,
    PaginationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productService: ProductService) {}

  page: number = 1;
  total: number = 0;
  take: number = 10;
  skip: number = 0;
  orderBy: 'name' | 'created' = 'name';
  orderType: 'asc' | 'desc' = 'asc';
  searchTerm: string = '';
  isLoading: boolean = true;

  products: ProductItem[] = [];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading = true;
    this.productService
      .getAll({
        Take: this.take,
        Skip: this.skip,
        OrderBy: this.orderBy,
        OrderType: this.orderType,
        Search: this.searchTerm,
      })
      .subscribe((res) => {
        this.total = res.count;
        this.products = res.data.map((i) => {
          return {
            name: i.name,
            price: i.price.amount,
            currency: i.price.currency ?? '',
            brand: i.brand.name,
            reviewScore: i.reviewScore,
            reviewCount: i.reviewCount,
            soldCount: i.sold,
            images: i.images.map(
              (img) => `${environment.baseImageUrl}${img.mediumLarge}`,
            ),
          };
        });

        this.isLoading = false;
      });
  }

  toggleSortOrder() {
    this.orderType = this.orderType === 'asc' ? 'desc' : 'asc';
    this.debounceFetchProducts();
  }

  onPageChange(page: number) {
    this.page = page;
    this.skip = (page - 1) * this.take;
    this.fetchProducts();
  }

  onPageSizeChange(size: number) {
    this.take = size;
    this.skip = 0;
    this.page = 1;
    this.fetchProducts();
  }

  debounceFetchProducts = debounce(this.fetchProducts, 500);

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.skip = 0;
    this.page = 1;
    this.debounceFetchProducts();
  }

  onChangeOrderBy(orderBy: 'name' | 'created') {
    this.orderBy = orderBy;
    this.fetchProducts();
  }
}
