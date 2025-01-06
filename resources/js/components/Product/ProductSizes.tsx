import React from "react";

interface ProductSizesProps {
  sizes: string[];
}

const ProductSizes: React.FC<ProductSizesProps> = ({ sizes }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Size</h3>
      <div className="flex gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            className="px-4 py-2 border-2 border-gray-300 rounded-md hover:border-purple-600"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
