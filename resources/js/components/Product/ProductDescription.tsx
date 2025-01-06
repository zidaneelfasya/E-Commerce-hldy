import React from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Description</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProductDescription;
