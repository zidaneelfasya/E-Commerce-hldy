import React from "react";

interface ProductPriceProps {
    
    originalPrice: number;
    discPrice: number;
    discount: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
    
    originalPrice,
    discPrice,
    discount,
}) => {
    if(discPrice==0){
        return(
            <div className="flex items-center gap-4 mb-4">
            <p className="text-purple-600 text-2xl font-bold">
                Rp {originalPrice.toLocaleString("id-ID")}
            </p>
            
        </div>
        )
    } else {
return (
        <div className="flex items-center gap-4 mb-4">
            <p className="text-purple-600 text-2xl font-bold">
                Rp {discPrice.toLocaleString("id-ID")}
            </p>
            <p className="text-gray-500 line-through">
                Rp {originalPrice.toLocaleString("id-ID")}
            </p>
            <p className="text-white bg-purple-600 px-2 py-1 rounded-md text-sm">
                {discount}%
            </p>
        </div>
    );
    }

    
};

export default ProductPrice;
