export interface ProductDto {
  productId: number;
  name: string;
  title: string;
  thumbnailImage: string;
  price: FullPriceBeforeOverallDiscount;
  originalPrice: FullPriceBeforeOverallDiscount;
  brand: Brand;
  sold: number;
  allowMultipleConfigs: boolean;
  url: string;
  created: Date;
  reviewScore: number;
  reviewCount: number;
  fullPriceBeforeOverallDiscount: FullPriceBeforeOverallDiscount;
  possibleDiscountPrice: FullPriceBeforeOverallDiscount;
  categories: any[];
  tags: Tag[];
  images: Image[];
}

export interface Brand {
  name: string;
  userIdentifier: string;
}

export interface FullPriceBeforeOverallDiscount {
  currency: null | string;
  amount: number;
}

export interface Image {
  id: number;
  name: string;
  description: string;
  alt: string;
  original: string;
  large: string;
  mediumLarge: string;
  medium: string;
  mediumSmall: string;
  small: string;
  thumbnail: string;
  smallThumbnail: string;
  productId: number;
}

export interface Tag {
  id: number;
  name: string;
  parentName: string;
  userIdentifier: string;
  collectionName: CollectionName;
  collectionId: number;
  thumbnailImage: string;
}

export enum CollectionName {
  DeliveryTimes = 'DeliveryTimes',
  Mood = 'Mood',
  OrderColorSamples = 'OrderColorSamples',
  ProductSpecificationsNew = 'Product specifications new',
}
