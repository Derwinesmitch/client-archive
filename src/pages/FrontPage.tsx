import { useState } from "react";

export default function FrontPage() {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("search:", query);
    };

    return (
        <div>
           <p>Search bar</p>
        </div>
    )

};

