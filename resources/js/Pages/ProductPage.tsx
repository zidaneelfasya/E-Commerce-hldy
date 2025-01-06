import React from "react";
import ProductContent from "@/components/ProductContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="pt-16">
                <ProductContent />
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
