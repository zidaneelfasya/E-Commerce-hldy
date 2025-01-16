import AdminLayout from "@/components/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

type ItemDetail = {
    id: number;
    name: string;
    price: number;
    location: string;
    stock: number;
    category?: { name: string };
    user?: { name: string };
    images: { image_path: string }[]; // List of image URLs
};

const Detail = ({ id }: { id: number }) => {
    console.log(id);
    const [item, setItem] = useState<ItemDetail | null>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    useEffect(() => {
        const fetchItemDetail = async () => {
            try {
                const { data } = await axios.get<ItemDetail>(
                    `/api/items/details/get/${id}`
                );
                setItem(data);
                setThumbnail(data.images[0]?.image_path || null);
            } catch (error) {
                console.error("Error fetching item detail:", error);
            }
        };

        fetchItemDetail();
    }, [id]);

    const handleThumbnailClick = (image: string) => {
        setThumbnail(image);
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Item Detail
                </h2>
            }
        >
            <Head title="Item Detail" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {item ? (
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {item.name}
                            </h3>
                            <div className="flex flex-col md:flex-row">
                                <div className="mb-4">
                                    {thumbnail && (
                                        <img
                                            src={`/storage/${thumbnail}`}
                                            alt="Thumbnail"
                                            className="w-full h-auto rounded-lg shadow-lg"
                                        />
                                    )}
                                </div>
                                <div className="flex space-x-2">
                                    {item.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`/storage/${image.image_path}`} // Sesuaikan key
                                            alt={`Image ${index + 1}`}
                                            className="w-20 h-20 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-500"
                                            onClick={() =>
                                                handleThumbnailClick(
                                                    image.image_path
                                                )
                                            }
                                        />
                                    ))}
                                </div>

                                <div className="w-full md:w-1/2 px-4">
                                    <p className="text-lg">
                                        <strong>Price:</strong> ${item.price}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Location:</strong>{" "}
                                        {item.location}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Stock:</strong> {item.stock}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Category:</strong>{" "}
                                        {item.category?.name || "N/A"}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Added By:</strong>{" "}
                                        {item.user?.name || "N/A"}
                                    </p>
                                    <Link
                                        href="/admin/items"
                                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                                    >
                                        Back to Items
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">Loading...</div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Detail;
