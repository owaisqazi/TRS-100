"use client"
import React, { useEffect, useState, useMemo } from 'react'
import DetailSearchCard from '../../ui/detail-search-card'
import { useGetPropertyQuery } from '@/service/propertyApi';
import PropertySearchBar from '../../ui/property-search-bar';
import SquareCard from './square-card';
import Link from 'next/link';

const ITEMS_PER_PAGE = 12; // items per page

const PropertyCard = ({ cards }) => {
    const { data, isLoading } = useGetPropertyQuery();
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (data?.data) {
            setFilteredProperties(data.data);
            setCurrentPage(1);
        }
    }, [data]);

    const handleSearchAndFilter = (query = "", propertyType = null, activeTab = "") => {
        let result = [...data?.data];

        if (query?.trim()) {
            const lowerQuery = query.toLowerCase();
            result = result?.filter((property) =>
                property?.title?.toLowerCase().includes(lowerQuery) ||
                property?.city?.toLowerCase().includes(lowerQuery) ||
                property?.project_name?.toLowerCase().includes(lowerQuery) ||
                property?.builder_name?.toLowerCase().includes(lowerQuery)
            );
        }

        if (propertyType && propertyType !== "Any") {
            result = result.filter((property) => property?.property_type === propertyType);
        }

        if (activeTab && activeTab !== "reset") {
            result = result.filter((property) => property?.property_post_status === activeTab);
        }

        setFilteredProperties(result);
        setCurrentPage(1); // reset page when filter/search changes
    }

    // Pagination calculation
    const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

    const paginatedProperties = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredProperties.slice(start, end);
    }, [filteredProperties, currentPage]);

    return (
        <>
            <div className="property-gradient text-white">
                <PropertySearchBar onSearch={handleSearchAndFilter} />
                <SquareCard cards={cards} />
            </div>
            <div className="container mx-auto md:px-10 px-5">
                <div className="flex justify-between my-8 items-center">
                    <h1 className='md:text-3xl text-lg font-bold'>All Properties on </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Properties Found</h3>
                            <p className="text-gray-500 text-center">
                                Try adjusting your filters or search criteria to find more properties.
                            </p>
                        </div>
                    ) : (
                        paginatedProperties?.map((property, index) => (
                            <DetailSearchCard property={property} key={index} />
                        ))
                    )}
                </div>

                {/* Pagination Buttons */}
                {totalPages > 1 && (
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
        </>
    )
}

export default PropertyCard
