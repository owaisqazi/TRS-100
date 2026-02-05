"use client"
import React from 'react'
import DetailSearchCard from '../../ui/detail-search-card'
import { useGetPropertylistfavoritesQuery } from '@/service/propertyApi';
import DetailcardFavorite from '@/components/ui/detail-card-favorite';

const PropertyFavouriteCard = () => {
    const { data, isLoading } = useGetPropertylistfavoritesQuery();

    const favoriteProperties = data?.data || [];
    console.log(favoriteProperties,'favoriteProperties---->')
    return (
        <>
            <div className="container mx-auto md:px-10 px-5">
                <div className="flex justify-between my-8 items-center">
                    <h1 className='md:text-3xl text-lg font-bold'>Your Favorites on </h1>
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
                    ) : favoriteProperties?.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
                            <div className="text-6xl mb-4">🏠</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Favorites Found</h3>
                            <p className="text-gray-500 text-center">
                                Start exploring properties and add them to your favorites!
                            </p>
                        </div>
                    ) : (
                        favoriteProperties?.map((property, index) => (
                            <DetailcardFavorite property={property} key={index} />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default PropertyFavouriteCard
