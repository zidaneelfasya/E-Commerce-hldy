import React from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: {
        id: number;
        images: { image_path: string }[]; // List of image URLs
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
                    image_path={
                        Array.isArray(product.images) && product.images.length > 0
                            ? product.images[0].image_path
                            : "" // Fallback jika images tidak ada
                    }
                    name={product.name}
                    oldPrice={product.oldPrice}
                    newPrice={product.newPrice}
                />
            ))}
        </div>
    );
};


export default ProductList;
