import React, { useState } from "react";
import Alert from "@mui/material/Alert";

interface ProductActionsProps {
    onAddToCart: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ onAddToCart }) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = () => {
        onAddToCart();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
    };

    return (
        <div>
            {/* Alert Notification */}
            {showAlert && (
                <div
                    style={{
                        position: "fixed",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1000,
                        width: "400px",
                    }}
                >
                    <Alert severity="success" variant="filled">
                        Product added to cart
                    </Alert>
                </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex gap-4">
                <button
                    className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
