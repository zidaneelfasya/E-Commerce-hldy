// CartItem.tsx
import React from "react";

interface CartItemProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
    onQuantityChange: (id: number, newQuantity: number) => void;
    images: string[]; // Gambar produk
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    price,
    quantity,
    onQuantityChange,
    images,
}) => {
    const handleIncrease = () => {
        onQuantityChange(id, quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            onQuantityChange(id, quantity - 1);
        }
    };

    return (
        <div className="flex justify-between items-center border-b py-6">
            <div className="flex items-center">
                <div className="mr-6">
                    
                    <img
                        src={images[0]} 
                        alt={name}
                        className="w-20 h-20 object-cover rounded-md"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-xl">{name}</h4>
                    <p className="text-gray-600 text-lg">Price: ${price}</p>
                </div>
            </div>
            <div className="flex items-center">
             
                <button
                    onClick={handleDecrease}
                    className="bg-gray-300 text-xl px-4 py-2 rounded-l-md hover:bg-gray-400"
                >
                    -
                </button>
               
                <p className="text-xl font-semibold mx-2">{quantity}</p>
                
                <button
                    onClick={handleIncrease}
                    className="bg-gray-300 text-xl px-4 py-2 rounded-r-md hover:bg-gray-400"
                >
                    +
                </button>
            </div>
            <div className="text-lg font-semibold text-right">
                ${(price * quantity).toFixed(2)}
            </div>
        </div>
    );
};

export default CartItem;
