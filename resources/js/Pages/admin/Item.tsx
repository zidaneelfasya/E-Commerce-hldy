import AdminLayout from "@/components/AdminLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

// Definisikan tipe data untuk item
type Item = {
  id: number;
  name: string;
  price: number;
  location: string;
  stock: number;
  category?: { name: string };
  user?: { name: string };
};

const Item = () => {
  const [items, setItems] = useState<Item[]>([]); // State dengan tipe data
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchItems = async () => {
      try {
        const { data } = await axios.get<Item[]>("/api/items"); // Ambil data dengan tipe
        setItems(data); // Simpan data ke state
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false); // Selesai loading
      }
    };

    fetchItems();
  }, []);

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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">List Item</h3>
              <div className="overflow-x-auto">
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-300 bg-white rounded-lg shadow table-auto">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">#</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Location</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Stock</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Added By</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.length > 0 ? (
                        items.map((item, index) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{index + 1}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{item.name}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{item.price}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{item.location}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{item.stock}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{item.category?.name || "N/A"}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">{item.user?.name || "N/A"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            className="px-4 py-2 text-center text-sm"
                            colSpan={7}
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

export default Item;
