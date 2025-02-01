import { useState } from "react";
import { useNavigate } from "react-router";

export default function FrontPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/archive?query=${encodeURIComponent(query)}`);
        console.log("search:", query);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
            <div className="w-full max-w-xl text-center">
                <h1 className="text-3x1 font-bold text-gray-900 bm-6">Welcome</h1>
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        placeholder="search:"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow md hover:bg-indigo-500">
                            🔍
                        </button>
                </form>
            </div>
        </div>
    )

};

