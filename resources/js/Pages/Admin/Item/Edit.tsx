import AdminLayout from "@/components/AdminLayout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface Category {
    id: number;
    name: string;
}

interface EditProps {
    categories: Category[];
    initialData: {
        id: number;
        name: string;
        price: string;
        disc_price: string | null;
        description: string;
        stock: string;
        condition: string;
        category_id: string;
        images: string[]; // URL gambar yang sudah diunggah sebelumnya
    };
}

const Edit: React.FC<EditProps> = ({ categories, initialData }) => {
    const [data, setData] = useState({
        name: initialData.name,
        price: initialData.price,
        disc_price: initialData.disc_price || "",
        description: initialData.description,
        stock: initialData.stock,
        condition: initialData.condition,
        category_id: initialData.category_id,
        newImages: [] as File[], // Untuk gambar baru yang diunggah
        existingImages: initialData.images, // Gambar yang sudah ada
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setErrors({});

            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("price", data.price);
            formData.append("disc_price", data.disc_price || "");
            formData.append("description", data.description);
            formData.append("stock", data.stock);
            formData.append("condition", data.condition);
            formData.append("category_id", data.category_id);

            data.newImages.forEach((image, index) => {
                formData.append(`newImages[${index}]`, image);
            });

            formData.append(
                "existingImages",
                JSON.stringify(data.existingImages)
            );

            const response = await axios.post(
                `http://127.0.0.1:8000/api/items/${initialData.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            Swal.fire({
                title: "Berhasil!",
                text: "Item berhasil diperbarui.",
                icon: "success",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/admin/items";
                }
            });
        } catch (error: any) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors || {});
            } else {
                Swal.fire({
                    title: "Gagal!",
                    text: "Gagal memperbarui item.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        }
    };

    const handleInputChange = (key: string, value: string | number | null) => {
        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setData((prevData) => ({
                ...prevData,
                newImages: [...prevData.newImages, ...files],
            }));
        }
    };

    const handleRemoveExistingImage = (index: number) => {
        setData((prevData) => ({
            ...prevData,
            existingImages: prevData.existingImages.filter((_, i) => i !== index),
        }));
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Item
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                {/* Form fields sama seperti di form Create */}
                                {/* Gambar Item */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Gambar Item
                                    </label>
                                    <div className="mt-2 flex flex-wrap gap-4">
                                        {data.existingImages.map(
                                            (image, index) => (
                                                <div
                                                    key={index}
                                                    className="relative"
                                                >
                                                    <img
                                                        src={image}
                                                        alt="Existing"
                                                        className="w-32 h-32 object-cover rounded-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveExistingImage(
                                                                index
                                                            )
                                                        }
                                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        className="mt-1 block w-full border bg-white border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
                                >
                                    Simpan Perubahan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;
