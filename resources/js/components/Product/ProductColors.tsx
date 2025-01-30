import React from "react";

interface ProductColorsProps {
  colors: string[];
}

const ProductColors: React.FC<ProductColorsProps> = ({ colors }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Color</h3>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full border-2 cursor-pointer"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
