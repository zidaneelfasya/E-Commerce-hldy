import React, { useState } from "react";
import ProductList from "./ProductList";

const ProductOther: React.FC = () => {
    const products = [
        {
            id: 1,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kemeja Denim Oversize Unisex HYPER ACTIVE",
            oldPrice: "Rp 455.714,00",
            newPrice: "Rp 159.500,00",
        },
        {
            id: 2,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kemeja Denim Raw Oversize Unisex HYPER ACTIVE",
            oldPrice: "Rp 455.714,00",
            newPrice: "Rp 159.500,00",
        },
        {
            id: 3,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kaos Oversize T-Shirt Polos",
            oldPrice: "Rp 227.143,00",
            newPrice: "Rp 79.900,00",
        },
        {
            id: 4,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kaos Oversize T-Shirt Classic",
            oldPrice: "Rp 227.143,00",
            newPrice: "Rp 79.900,00",
        },
        {
            id: 5,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kaos Oversize T-Shirt Classic",
            oldPrice: "Rp 227.143,00",
            newPrice: "Rp 79.900,00",
        },
        {
            id: 6,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kaos Oversize T-Shirt Classic",
            oldPrice: "Rp 227.143,00",
            newPrice: "Rp 79.900,00",
        },
        {
            id: 7,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kaos Oversize T-Shirt Classic",
            oldPrice: "Rp 227.143,00",
            newPrice: "Rp 79.900,00",
        },
        {
            id: 8,
            image: "/storage/dummy/fotoother1.png",
            name: "JINISO - Kaos Oversize T-Shirt Classic",
            oldPrice: "Rp 227.143,00",
            newPrice: "Rp 79.900,00",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 5;

    const handleNext = () => {
        if (startIndex + itemsToShow < products.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <section className="container mx-auto text-center m-5 flex flex-col items-start">
            <div className="relative w-full overflow-hidden">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                >
                    {"<"}
                </button>
                {/* Wrapper for ProductList */}
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${
                            startIndex * (100 / itemsToShow)
                        }%)`,
                        width: `${(products.length / itemsToShow) * 100}%`, // Total width for products
                    }}
                >
                    <ProductList products={products} />
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
                    onClick={handleNext}
                    disabled={startIndex + itemsToShow >= products.length}
                >
                    {">"}
                </button>
            </div>
        </section>
    );
};

export default ProductOther;
