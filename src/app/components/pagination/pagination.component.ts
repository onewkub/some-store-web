import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChanged: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

  handleOnPageChange(e: any) {
    const pageSize = parseInt(e.target.value);
    this.currentPage = 1; // Reset to first page when page size changes
    this.pageSize = pageSize;

    this.pageSizeChanged.emit(this.pageSize);
  }

  getNearbyPages(currentPage: number, totalPages: number): number[] {
    const pagesToShow: number[] = [];
    const startPage = Math.max(currentPage - 1, 2);
    const endPage = Math.min(currentPage + 1, totalPages - 1);

    for (let page = startPage; page <= endPage; page++) {
      pagesToShow.push(page);
    }

    return pagesToShow;
  }

  get isPreviousDisabled(): boolean {
    return this.currentPage === 1;
  }

  get isNextDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }
}
