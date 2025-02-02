import { useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Archive() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");


    const [results, setResults] = useState<string[]>([]);

    useEffect(()=> {
        if (searchQuery) {
            const fakeData = [
                "Juan ladrillos",
                "Richard arcilla",
                "Susana azulejos"
            ].filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
            setResults(fakeData);
        }

    }, [searchQuery]);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3x1 font-bold text-gray-900 mb-6">Results for: {searchQuery}</h1>
            {results.length === 0 ? (
                <p className="text-gray-600">No results</p>
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
                                <th className="border border-gray-300 p-2">{item}</th>    
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )


}