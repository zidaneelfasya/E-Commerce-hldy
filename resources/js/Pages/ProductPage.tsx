import React from "react";
import ProductContent from "@/components/ProductContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductOther from "@/components/Product/ProductOther";

const ProductPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="pt-16">
                <ProductContent />
                <div className="flex items-center   ">
                    <h2 className="font-extrabold text-lg">Other Product</h2>
                </div>
                <ProductOther />
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
