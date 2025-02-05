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
        <div className="min-h-screen p-8 bg-gray-100">
            <div className="flex justify-between items-center w-full max-w-3xl mb-4">
                <h1 className="text-3x1 font-bold text-gray-900 mb-6">Results for: {searchQuery}</h1>
                <div className="flex space-x-4">
                <button
                    onClick={() => navigate("/addpage")}
                    className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500" 
                    >
                    Add new
                </button>
                <button
                    onClick={() => navigate("/frontpage")}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-500"
                >🔙 Back to Search</button>
                </div>
            </div> 

                {results.length === 0 ? (
                    <p className="text-gray-600 text-lg mt-6">No results</p>
                ): (
                        <table className="w-full border-collapse border border-gray-300 bg-white">
                            <thead>
                                <tr className="bg-indigo-600 text-white">
                                    <th className="border border-gray-300 p-2">#</th>
                                    <th className="border border-gray-300 p-2">Company Name</th>
                                    <th className="border border-gray-300 p-2">Email:</th>
                                    <th className="border border-gray-300 p-2">Url:</th>
                                    <th className="border border-gray-300 p-2">Telephone:</th>
                                    <th className="border border-gray-300 p-2">What is:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((item, index)=>(
                                    <tr key={index} className="border border-gray-300">
                                        <th className="border border-gray-300 p-2">{index + +1}</th>
                                        <th className="border border-gray-300 p-2">{item.companyName}</th>
                                        <th className="border border-gray-300 p-2">{item.email}</th>
                                        <td className="p-2">{item.websiteUrl}</td>
                                        <td className="p-2">{item.phoneNumber}</td>
                                        <td className="p-2">{item.whatIs}</td>    
                                        <td className="p-2">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-red-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-500"
                                            >
                                                🗑️ Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>   
                )}
                 
        </div>
    )


}