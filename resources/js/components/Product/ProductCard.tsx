import React from "react";

interface ProductCardProps {
    image_path: string; // Single image URL
    name: string;
    oldPrice: number;
    newPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image_path,
    name,
    oldPrice,
    newPrice,
}) => {
    if(newPrice == 0){
        return (
            <div className="border-solid p-2.5 w-80 text-left transition-opacity duration-300 ease-in-out hover:opacity-75">
                <img src={`/storage/${image_path}`} alt={name} className="product-image" />
                <h3 className="font-extrabold text-lg">{name}</h3>
    
                <div className="flex justify-between">
                    <span className="text-bold">{oldPrice}</span>
                </div>
            </div>
        );
    }
    if(newPrice != 0){
        return (
            <div className="border-solid p-2.5 w-80 text-left transition-opacity duration-300 ease-in-out hover:opacity-75">
                <img src={`/storage/${image_path}`} alt={name} className="product-image" />
                <h3 className="font-extrabold text-lg">{name}</h3>
    
                <div className="flex justify-between">
                    <span className="line-through">{oldPrice}</span>
                    <span className="text-bold">{newPrice}</span>
                </div>
            </div>
        );
    }
    
};

export default ProductCard;
