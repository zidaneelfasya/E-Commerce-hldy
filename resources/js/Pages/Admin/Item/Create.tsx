import AdminLayout from "@/components/AdminLayout";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface Category {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
}

interface CreateProps {
    categories: Category[];
    users: User[];
}

const Create: React.FC<CreateProps> = ({ categories }) => {
    const [data, setData] = useState({
        name: "",
        price: "",
        disc_price: "",
        description: "",
        stock: "",
        condition: "ready",
        category_id: "",
        images: [] as File[], // Menggunakan array untuk menyimpan beberapa file gambar
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

            data.images.forEach((image, index) => {
                formData.append(`images[${index}]`, image);
            });

            const response = await axios.post(
                "http://127.0.0.1:8000/api/items",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            Swal.fire({
                title: "Berhasil!",
                text: "Item berhasil disimpan.",
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
                    text: "Gagal menyimpan item.",
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
                images: [...prevData.images, ...files],
            }));
        }
    };

    const handleRemoveImage = (index: number) => {
        setData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index),
        }));
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Item
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                {/* Nama Item */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nama Item
                                    </label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    {errors.name && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                {/* Harga */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Harga
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.price}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "price",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    {errors.price && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.price}
                                        </div>
                                    )}
                                </div>

                                {/* Harga Diskon */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Harga Diskon (Opsional)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.disc_price || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "disc_price",
                                                e.target.value
                                                    ? parseFloat(e.target.value)
                                                    : null
                                            )
                                        }
                                    />
                                    {errors.disc_price && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.disc_price}
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        description
                                    </label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.description}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    {errors.location && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>
                                {/* stock */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.stock}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "stock",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    {errors.location && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.stock}
                                        </div>
                                    )}
                                </div>
                                {/* Upload Gambar */}
                                {/* Gambar Item */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Gambar Item
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        className="mt-1 block w-full border bg-white border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        onChange={handleFileChange}
                                    />
                                    <div className="mt-2 flex flex-wrap gap-4">
                                        {data.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative"
                                            >
                                                <img
                                                    src={URL.createObjectURL(
                                                        image
                                                    )}
                                                    alt="Preview"
                                                    className="w-32 h-32 object-cover rounded-md"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleRemoveImage(index)
                                                    }
                                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    {errors.images && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.images}
                                        </div>
                                    )}
                                </div>
                                {/* Kategori */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kategori
                                    </label>
                                    <select
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.category_id}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "category_id",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.category_id}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
                                >
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Create;
