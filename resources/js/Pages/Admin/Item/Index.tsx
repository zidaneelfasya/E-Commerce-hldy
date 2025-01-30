import AdminLayout from "@/components/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

type Item = {
    id: number;
    name: string;
    price: number;
    disc_price: number;
    stock: number;
    category?: { name: string };
    user?: { name: string };
};

const Index = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const { data } = await axios.get<Item[]>("/api/get/items");
                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const handleDelete = async (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/api/items/${id}`);
                    setItems((prevItems) =>
                        prevItems.filter((item) => item.id !== id)
                    );
                    Swal.fire(
                        "Deleted!",
                        "The item has been deleted.",
                        "success"
                    );
                } catch (error) {
                    console.error("Error deleting item:", error);
                    Swal.fire(
                        "Error!",
                        "There was an issue deleting the item.",
                        "error"
                    );
                }
            }
        });
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Data Item
                </h2>
            }
        >
            <Head title="Item" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                List Item
                            </h3>
                            <div className="overflow-x-auto">
                                {loading ? (
                                    <div className="text-center">
                                        Loading...
                                    </div>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300 bg-white rounded-lg shadow table-auto">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    #
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Disc Price
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Stock
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Category
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Added By
                                                </th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {items.length > 0 ? (
                                                items.map((item, index) => (
                                                    <tr
                                                        key={item.id}
                                                        className="hover:bg-gray-50"
                                                    >
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {item.name}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {item.price}
                                                        </td>
                                                        {!item.disc_price ? (
                                                            <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            -
                                                        </td>
                                                        ) : (
                                                            <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {item.disc_price}
                                                        </td>
                                                        )}
                                                        
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {item.stock}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {item.category
                                                                ?.name || "N/A"}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                            {item.user?.name ||
                                                                "N/A"}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm flex space-x-2">
                                                            <Link
                                                                href={`/admin/items/details/${item.id}`}
                                                                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white text-sm"
                                                            >
                                                                Detail
                                                            </Link>
                                                            <Link
                                                                href={`/items/${item.id}/edit`}
                                                                className="border border-green-600 text-green-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-green-600 hover:text-white text-sm"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="border border-red-600 text-red-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white text-sm"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        className="px-4 py-2 text-center text-sm"
                                                        colSpan={8}
                                                    >
                                                        No items found.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
