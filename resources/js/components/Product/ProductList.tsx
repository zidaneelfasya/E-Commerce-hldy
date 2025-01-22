import React from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: {
        id: number;
        image_path: string;
        name: string;
        oldPrice: string;
        newPrice: string;
    }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="flex gap-5">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image_path}
                    name={product.name}
                    oldPrice={product.oldPrice}
                    newPrice={product.newPrice}
                />
            ))}
        </div>
    );
};

export default ProductList;
