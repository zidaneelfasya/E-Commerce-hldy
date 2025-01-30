import React, { useState } from "react";

const ProductPage: React.FC = () => {
  // Dummy data
  const product = {
    title: "JINISO - Kemeja Denim Raw Oversize Unisex HYPER ACTIVE",
    price: 159500,
    originalPrice: 455000,
    discount: 64,
    description: `JINISO Overload Shirt Untuk Segala Aktivitasmu! Genderless! Bisa dipakai cewe dan cowo lho. Oversized Kemeja Denim dari JINISO untuk kamu yang HyperActive.`,
    colors: ["#C2D4D8", "#D8CBC2", "#E8E8E8", "#000000", "#C7B4DE"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/fotoproduk/5.png",
      "/fotoproduk/2.png",
      "/fotoproduk/3.png",
      "/fotoproduk/4.png",
      "/fotoproduk/1.png",
      "/fotoproduk/7.png",

    ],
  };

  // State untuk gambar yang dipilih
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Images */}
        <div className="flex flex-row md:flex-col gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product image ${index + 1}`}
              className={`w-16 h-16 cursor-pointer border-2 ${
                selectedImage === image ? "border-purple-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        
        <div className="flex-1">
          <img
            src={selectedImage}
            alt="Selected product"
            className="w-full h-auto max-h-[750px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

          {/* Price and Discount */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-purple-600 text-2xl font-bold">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            <p className="text-gray-500 line-through">
              Rp {product.originalPrice.toLocaleString("id-ID")}
            </p>
            <p className="text-white bg-purple-600 px-2 py-1 rounded-md text-sm">
              {product.discount}%
            </p>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border-2 border-gray-300 rounded-md hover:border-purple-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400">
              Add to Cart
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
