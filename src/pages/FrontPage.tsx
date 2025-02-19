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
<div className="relative min-h-screen flex items-start justify-center px-6">
    <div className="absolute top-1/4 w-full max-w-xl text-center px-[12.5%] sm:px-0">
        <img 
            
        alt="company logo" className="mx-auto mb-6 h-16 w-auto" />
        <form onSubmit={handleSearch} className="relative">
            <input
                type="text"
                placeholder="search company name:"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-1 sm:py-2 text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                🔍
            </button>
        </form>
    </div>
</div>
    )

};

