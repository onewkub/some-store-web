import { Component, Input } from '@angular/core';

export type ProductItem = {
  name: string;
  price: number;
  currency: string;
  brand: string;
  reviewScore: number;
  reviewCount: number;
  soldCount: number;
  images: string[];
};

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductItem;

  currentImageIndex = 0;

  nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
