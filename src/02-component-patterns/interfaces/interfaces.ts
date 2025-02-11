
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductsButtonsProps } from "../components/ProductsButtons";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img: string;
}

export interface ProductContextProps {
    count: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props : ProductTitleProps) => JSX.Element;
    Image: (Props : ProductImageProps) => JSX.Element;
    Buttons: (Props : ProductsButtonsProps) => JSX.Element;
}