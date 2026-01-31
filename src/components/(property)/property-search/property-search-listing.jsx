import DetailSearchCard from "../../ui/detail-search-card";
import { useState, useEffect, useMemo } from "react";

const ITEMS_PER_PAGE = 12;

function PropertySearchListing({ properties, isLoading, setShowFilters }) {
    const [filter, setFilter] = useState("all");
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let data = [];

        if (!properties || properties?.length === 0) {
            setFilteredProperties([]);
            return;
        }

        if (filter === "all") {
            data = properties;
        } else if (filter === "ready") {
            data = properties.filter(p => p.possession_status === "ready_to_move");
        } else if (filter === "development") {
            data = properties.filter(p => p.possession_status === "under_construction");
        } else if (filter === "furnished") {
            data = properties.filter(p => p.furnished === true);
        } else if (filter === "new_projects") {
            data = properties.filter(p => p.is_new_project === true);
        } else {
            data = properties;
        }

        setFilteredProperties(data);
        setCurrentPage(1); // filter change par page reset
    }, [filter, properties]);

    const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

    const paginatedProperties = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredProperties.slice(start, end);
    }, [filteredProperties, currentPage]);

    const filterButtons = [
        { label: "All Properties", value: "all" },
        { label: "Ready to move", value: "ready" },
        { label: "Development", value: "development" },
        { label: "Furnished", value: "furnished" },
        { label: "New Projects", value: "new_projects" },
    ];

    return (
        <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="md:text-2xl text-lg font-bold">
                    {isLoading ? "Loading..." : `${filteredProperties?.length} Properties found`}
                </h2>
                <button
                    className="md:hidden bg-[#1a1333] px-4 py-2 rounded"
                    onClick={() => setShowFilters(true)}
                >
                    Filters
                </button>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-6 grid-cols-2 gap-2 mb-6">
                {filterButtons.map(btn => (
                    <button
                        key={btn.value}
                        className={`py-2 rounded-full text-sm cursor-pointer ${filter === btn.value ? "bg-black text-white" : "bg-[#5F5769] text-white"
                            }`}
                        onClick={() => setFilter(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
                <button
                    className="bg-black py-2 rounded-full text-sm text-white cursor-pointer"
                    onClick={() => setFilter("all")}
                >
                    Reset all
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white p-4 rounded-2xl shadow">
                            <div className="w-full h-48 bg-gray-200 animate-pulse rounded-xl mb-4" />
                            <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded mb-2" />
                            <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded mb-2" />
                            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                        </div>
                    ))
                ) : paginatedProperties?.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
                        <div className="text-6xl mb-4">🏠</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            No Properties Found
                        </h3>
                        <p className="text-gray-500 text-center">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                ) : (
                    paginatedProperties.map((property, index) => (
                        <DetailSearchCard property={property} key={index} />
                    ))
                )}
            </div>

            {/* Pagination */}
            {!isLoading && totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                    {/* Prev Button */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-full bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50 flex-shrink-0"
                    >
                        Prev
                    </button>

                    {/* Page Numbers - scrollable on mobile */}
                    <div className="flex gap-2 overflow-x-auto px-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 ${currentPage === page
                                        ? "bg-black text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-full bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50 flex-shrink-0"
                    >
                        Next
                    </button>

                </div>
            )}

        </div>
    );
}

export default PropertySearchListing;
