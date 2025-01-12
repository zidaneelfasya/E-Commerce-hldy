import React from "react";

interface CartSummaryProps {
    total: number;
    calculateTotal: () => number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, calculateTotal }) => {
    return (
        <div className="w-1/2 bg-white ">
            <section className="border-l pl-16">
                <div className="flex justify-between mb-12">
                    <p className="font-semibold text-3xl">Subtotal</p>
                    <p className="font-semibold text-2xl">
                        ${calculateTotal().toFixed(2)}
                    </p>
                </div>
                <div className="flex justify-between mb-12">
                    <p className="font-semibold text-2xl">Shipping</p>
                    <p className="font-semibold text-2xl">Free</p>
                </div>
                <div className="flex justify-between mb-16">
                    <p className="font-semibold text-4xl">Total</p>
                    <p className="font-semibold text-4xl">
                        ${total.toFixed(2)}
                    </p>
                </div>
                <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <span className="absolute inset-0 bg-white bg-opacity-50 rounded-lg group-hover:bg-transparent transition duration-200" />
                    <span className="relative"> Checkout</span>
                </div>
                </button>
                   
            </section>
        </div>
    );
};

export default CartSummary;
