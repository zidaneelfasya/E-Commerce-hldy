import React, { useState } from "react";
import ProductImages from "./Product/ProductImage";
import ProductDetails from "./Product/ProductDetails";

interface ProductContentProps {
    product: {
        id: number;
        name: string;
        price: number;
        disc_price: number;
        stock: number;
        description: string;
        category?: { name: string };
        user?: { name: string };
        images: { image_path: string }[];
    };
}
interface Product2 {
    sizes: string[];
    colors: string[];
}

const ProductContent: React.FC<ProductContentProps> = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState<string>(
        `/storage/${product.images[0].image_path}`
    );
    const product2: Product2 = {
        colors: ["#C2D4D8", "#D8CBC2", "#E8E8E8", "#000000", "#C7B4DE"],
        sizes: ["S", "M", "L", "XL"],
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Images */}
                <div className="flex-1">
                    <img
                        src={selectedImage}
                        alt="Selected product"
                        className="w-full h-auto max-h-[750px] object-cover"
                    />
                </div>
                <ProductImages
                    images={product.images}
                    selectedImage={selectedImage}
                    onSelectImage={setSelectedImage}
                />

                
                {/* Product Details */}
                <ProductDetails
                    title={product.name}
                    price={product.price}
                    originalPrice={product.price} 
                    discPrice={product.disc_price}
                    discount={(product.price-product.disc_price) / product.price * 100}
                    description={product.description}
                    colors={product2.colors}
                    sizes={product2.sizes}
                />
            </div>
        </div>
    );
};

export default ProductContent;
