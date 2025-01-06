import React from "react";

const ProductActions: React.FC = () => {
  return (
    <div className="flex gap-4">
      <button className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400">
        Add to Cart
      </button>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
        Checkout
      </button>
    </div>
  );
};

export default ProductActions;
