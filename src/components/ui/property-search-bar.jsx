"use client";

import { ChevronDown, Search, MapPin, Home, Info } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";

function PropertySearchBar({ onSearch, isDetailPage = false }) {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState("Any");
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((query, type, tab) => {
        if (onSearch) onSearch(query, type, tab);
      }, 500),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(searchQuery, propertyType, activeTab);
    return () => debouncedSearch.cancel();
  }, [searchQuery, propertyType, activeTab]);

  const handleSearch = () => {
    if (onSearch) onSearch(searchQuery, propertyType, activeTab);
    router.push("/property-search");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const tabs = ["buy", "rent", "residential", "plot", "commercial", "Farmland"];

  return (
    <div className="relative mx-4 md:mx-auto py-5 md:py-10">
      {/* Search Box with border */}
      <div className="flex flex-col bg-black rounded-2xl border-2 border-gray-500 p-5 max-w-5xl mx-auto shadow-lg">
        {/* Title */}
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          #FindYourDreamProperty
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-5 text-white text-xs sm:text-sm md:text-base font-semibold">
          {tabs?.map((tab) => {
            // 🔹 detail page pe "sell" tab hide karna
            if (isDetailPage && tab === "residential") return null;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-colors text-xs sm:text-sm md:text-base ${activeTab === tab
                    ? "bg-white text-black shadow-md"
                    : "bg-transparent hover:bg-gray-700"
                  }`}
              >
                {tab.toUpperCase()}
              </button>
            );
          })}
        </div>


        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3 bg-white md:rounded-full shadow-md p-3">
          {/* Location / Property Type */}
          <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2 sm:py-0 sm:px-4 flex-1 sm:flex-none">
            <MapPin className="text-gray-500 h-5 w-5" />
            <select
              className="bg-transparent outline-none text-gray-800 font-medium w-full"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="Any">Property Type</option>
              <option value="flat_apartment">Flat / Apartment</option>
              <option value="villa">House / Villa</option>
              <option value="builder">Builder Floor</option>
              <option value="plot">Plot</option>
            </select>
            {/* <ChevronDown className="text-gray-500 h-4 w-4" /> */}
          </div>

          {/* Address / Search Input */}
          <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2 sm:py-0 flex-1">
            <Home className="text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by title, city, project name or builder name"
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          {/* Info Icon
          <div className="md:flex items-center justify-center px-3 md:px-0 border-b sm:border-b-0 sm:border-r border-gray-300 py-2 sm:py-0">
            <Info className="text-gray-500 h-5 w-5" />
          </div> */}

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 py-3 sm:px-6  rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-4"
          >
            <Search className="h-5 w-5" /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertySearchBar;
