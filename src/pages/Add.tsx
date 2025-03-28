import { useState } from "react";
import { db } from "../firebase/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";




export default function AddPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatIs, setWhatIs] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "entries"), {
        email,
        name,
        lastName,
        companyName,
        websiteUrl,
        phoneNumber,
        whatIs,
        createdAt: new Date(),
      });

      console.log("Entry added successfully!");
      navigate("/archive");
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };
  
    return (
<>
  <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 bg-gray-50">
    <div className="sm:mx-auto sm:w-full sm:max-w-lg">
      <div className="bg-white shadow-lg rounded-lg p-6">
    
        <div className="flex items-center justify-between bg-blue-100 p-3 rounded-md mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Entry:</h2>
          <button
            onClick={() => navigate("/frontpage")}
            className="bg-blue-500 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-blue-400 transition text-sm"
          >
            Back to Search
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
              Company:
            </label>
            <div className="mt-2">
              <input
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Name:
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
              LastName:
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-900">
              Website URL:
            </label>
            <div className="mt-2">
              <input
                id="websiteUrl"
                onChange={(e) => setWebsiteUrl(e.target.value)}
                value={websiteUrl}
                placeholder="https://example.com"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">
              Phone Number:
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="whatIs" className="block text-sm font-medium text-gray-900">
              Category:
            </label>
            <div className="mt-2">
              <input
                id="whatIs"
                value={whatIs}
                onChange={(e) => setWhatIs(e.target.value)}
                type="text"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400 transition"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
    )
  }
  