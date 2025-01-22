import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const ProductOther: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const itemsToShow = 5;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/get/items");
                const data = await response.json();
                setProducts(data); // Pastikan API mengembalikan array
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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

    if (loading) {
        return <div>Loading...</div>;
    }

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
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`,
                        width: `${(products.length / itemsToShow) * 100}%`,
                    }}
                >
                    <ProductList products={products.slice(startIndex, startIndex + itemsToShow)} />
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
