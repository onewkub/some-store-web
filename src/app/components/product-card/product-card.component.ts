import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductItem;

  currentImageIndex = 0;

  isLoading = false;

  onLoad() {
    this.isLoading = false;
  }

  nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.isLoading = true;
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.isLoading = true;
      this.currentImageIndex--;
    }
  }

  get isNoNext(){
    return this.currentImageIndex === this.product.images.length - 1;
  }

  get isNoPrev(){
    return this.currentImageIndex === 0;
  }

}
