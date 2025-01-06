import React, { useState } from "react";
import ProductImages from "./Product/ProductImage";
import ProductDetails from "./Product/ProductDetails";


interface Product {
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    description: string;
    colors: string[];
    sizes: string[];
    images: string[];
}

const ProductContent: React.FC = () => {
    const product: Product = {
        title: "JINISO - Kemeja Denim Raw Oversize Unisex HYPER ACTIVE",
        price: 159500,
        originalPrice: 455000,
        discount: 64,
        description: `JINISO Overload Shirt Untuk Segala Aktivitasmu! Genderless! Bisa dipakai cewe dan cowo lho. Oversized Kemeja Denim dari JINISO untuk kamu yang HyperActive. dari coupelan sampai tuker2an sama temen/pacar bebas deh karena emang sekeren itu! Gak usah ribet mau pake outfit apa, tinggal grab ...MORE`,
        colors: ["#C2D4D8", "#D8CBC2", "#E8E8E8", "#000000", "#C7B4DE"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "/fotoproduk/5.png",
            "/fotoproduk/2.png",
            "/fotoproduk/3.png",
            "/fotoproduk/4.png",
            "/fotoproduk/1.png",
            "/fotoproduk/7.png",
        ],
    };

    const [selectedImage, setSelectedImage] = useState<string>(
        product.images[0]
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Images */}
                <ProductImages
                    images={product.images}
                    selectedImage={selectedImage}
                    onSelectImage={setSelectedImage}
                />

                {/* Main Product Image */}
                <div className="flex-1">
                    <img
                        src={selectedImage}
                        alt="Selected product"
                        className="w-full h-auto max-h-[750px] object-cover"
                    />
                </div>

                {/* Product Details */}
                <ProductDetails
                    title={product.title}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    description={product.description}
                    colors={product.colors}
                    sizes={product.sizes}
                />
            </div>
        </div>
    );
};

export default ProductContent;
