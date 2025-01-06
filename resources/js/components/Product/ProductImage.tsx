import React from "react";

interface ProductImagesProps {
    images: string[];
    selectedImage: string;
    onSelectImage: (image: string) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
    images,
    selectedImage,
    onSelectImage,
}) => {
    return (
        <div className="flex flex-row md:flex-col gap-4">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className={`w-16 h-16 cursor-pointer border-2 ${
                        selectedImage === image
                            ? "border-purple-500"
                            : "border-gray-300"
                    }`}
                    onClick={() => onSelectImage(image)}
                />
            ))}
        </div>
    );
};

export default ProductImages;
