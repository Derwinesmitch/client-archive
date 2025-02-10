import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function Archive() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchQuery = new URLSearchParams(location.search).get("query");
    


    const [results, setResults] = useState<{ id: string; companyName: string; email: string; websiteUrl: string; phoneNumber: string; whatIs: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "entries"));
            const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })) as { id: string; companyName: string; email: string; websiteUrl: string; phoneNumber: string; whatIs: string }[];
    
            if (searchQuery) {
              const filteredData = data.filter((entry) =>
                entry.companyName.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setResults(filteredData);
            } else {
              setResults(data);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [searchQuery]);

      const handleDelete = async (id: string) => {
        try {
          await deleteDoc(doc(db, "entries", id));
          setResults(results.filter((entry) => entry.id !== id));
        } catch (error) {
          console.error("Error deleting entry:", error);
        }
      };

    return (
                <div className="min-h-screen p-8 bg-gray-50">
            <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Results for: {searchQuery}</h1>
                <div className="flex space-x-4">                    
                    <button
                        onClick={() => navigate("/frontpage")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400 transition"
                    >
                        🔙 Back to Search
                    </button>
                    <button
                        onClick={() => navigate("/addpage")}
                        className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition"
                    >
                        Add new
                    </button>

                </div>
            </div>

            {results.length === 0 ? (
                <p className="text-gray-600 text-lg text-center">No results found.</p>
            ) : (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-100 text-gray-800">
                            <tr>
                                <th className="py-3 px-4">#</th>
                                <th className="py-3 px-4">Company Name</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Website</th>
                                <th className="py-3 px-4">Phone</th>
                                <th className="py-3 px-4">Category</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((item, index) => (
                                <tr key={item.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4 font-semibold">{item.companyName}</td>
                                    <td className="py-3 px-4">{item.email}</td>
                                    <td className="py-3 px-4 text-blue-600 underline">{item.websiteUrl}</td>
                                    <td className="py-3 px-4">{item.phoneNumber}</td>
                                    <td className="py-3 px-4">
                                    <span
                                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                                item.whatIs === "Software Development"
                                                    ? "bg-blue-200 text-blue-800"
                                                    : item.whatIs === "Food & Catering"
                                                    ? "bg-green-200 text-green-800"
                                                    : item.whatIs === "Healthcare & Medical"
                                                    ? "bg-red-200 text-red-800"
                                                    : item.whatIs === "Digital Marketing"
                                                    ? "bg-yellow-200 text-yellow-800"
                                                    : item.whatIs === "Education & Learning"
                                                    ? "bg-purple-200 text-purple-800"
                                                    : "bg-gray-200 text-gray-800"
                                            }`}
                                        >
                                            {item.whatIs}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-500 transition"
                                        >
                                            🗑 Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )


}