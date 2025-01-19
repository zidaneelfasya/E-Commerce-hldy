import React from "react";
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
    ];

    return (
        <section className="text-center m-5 flex flex-col items-center">
            <ProductList products={products} />
        </section>
    );
};

export default ProductOther;
