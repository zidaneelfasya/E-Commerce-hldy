import React, { useEffect, useState } from "react";
import ProductContent from "@/components/ProductContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductOther from "@/components/Product/ProductOther";

interface ProductPageProps {
    id: string;
}
const ProductPage: React.FC<ProductPageProps> = ({ id }) => {
    console.log(id);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/items/details/get/${id}`
                );
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) {
        return (
            <div>
                <Header />
                <main className="flex flex-col text-2xl pt-16 items-center p-72">
                    return <div>Loading...</div>;
                    <ProductOther />
                </main>
                <Footer />
            </div>
        );
    }

    if (!product) {
        return (
            <div>
                <Header />
                <main className="flex flex-col text-2xl pt-24 items-center ">
                    <div>Product not found.</div>
                    <ProductOther />
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main className="flex flex-col pt-16">
                <ProductContent product={product} />
                <div className="flex justify-start container mx-auto px-4 pb-8">
                    <h2 className="font-extrabold text-2xl">Other Product</h2>
                </div>
                <ProductOther />
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
