import React from "react";
import ProductPrice from "./ProductPrice";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";
import ProductDescription from "./ProductDescription";
import ProductActions from "./ProductActions";

interface ProductDetailsProps {
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    description: string;
    colors: string[];
    sizes: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    title,
    price,
    originalPrice,
    discount,
    description,
    colors,
    sizes,
}) => {
    return (
        <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <ProductPrice
                price={price}
                originalPrice={originalPrice}
                discount={discount}
            />
            <ProductColors colors={colors} />
            <ProductSizes sizes={sizes} />
            <ProductDescription description={description} />
            <ProductActions onAddToCart={() => {}} />
        </div>
    );
};

export default ProductDetails;
