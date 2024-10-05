export interface ProductQueryDto {
  Take?: number;
  Skip?: number;
  OrderBy?: 'name' | 'created';
  OrderType?: 'asc' | 'desc';
  Search?: string;
}
