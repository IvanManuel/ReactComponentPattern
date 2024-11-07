export { ProductImage } from './ProductImage';
export { ProductsButtons } from './ProductsButtons';
export { ProductTitle } from './ProductTitle';

import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductsButtons } from './ProductsButtons';
import { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductsButtons,
})

export default ProductCard;