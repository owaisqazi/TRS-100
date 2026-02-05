"use client";
import { useEffect, useState } from "react";
import { useGetPropertyQuery } from "@/service/propertyApi";
import PropertySearchBar from "../../ui/property-search-bar";

function PropertyDetailMainSection({ onResults }) {
    const { data, isLoading } = useGetPropertyQuery();
    const [allProperties, setAllProperties] = useState([]);
    const isDetailPage= true;

    useEffect(() => {
        if (data?.data) {
            setAllProperties(data.data);
            onResults?.(data.data); // initial load pe saara data bhej do
        }
    }, [data]);

    const handleSearch = (query, propertyType, activeTab = "") => {
        let result = [...allProperties];

        // 🔍 Text search
        if (query?.trim()) {
            result = result.filter(
                (property) =>
                    property?.title?.toLowerCase().includes(query.toLowerCase()) ||
                    property?.city?.toLowerCase().includes(query.toLowerCase()) ||
                    property?.project_name?.toLowerCase().includes(query.toLowerCase()) ||
                    property?.builder_name?.toLowerCase().includes(query.toLowerCase())
            );
        }

        // 🏠 Property Type
        if (propertyType && propertyType !== "Any") {
            const type = propertyType.toLowerCase().replace(" ", "_");
            result = result.filter(
                (property) => property?.property_type === type
            );
        }

        // 📌 Tab filter (Buy, Rent etc)
        if (activeTab && activeTab !== "reset") {
            result = result.filter(
                (property) => property?.property_post_status === activeTab
            );
        }

        // parent ko filtered data bhejo
        onResults?.(result);
    };

    return (
        <div className="h-screen flex justify-center items-center">
           <div className="w-full px-4 md:px-0 md:w-3/4">
             <PropertySearchBar onSearch={handleSearch} isDetailPage={isDetailPage} />
           </div>
        </div>
    );
}

export default PropertyDetailMainSection;
