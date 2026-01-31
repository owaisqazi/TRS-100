"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { basedUrl } from "@/libs/based-url";
import Link from "next/link";

export default function DetailCard({ property }) {
  return (
    <Link href={`/property`} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 relative">
      
      {/* Favorite Icon */}
      <div className="absolute top-3 right-3 z-10">
        <Heart
          className={`h-6 w-6 ${
            property.is_favorited ? "text-red-500 fill-red-500" : "text-gray-300"
          }`}
        />
      </div>

      {/* Property Image */}
      <div className="relative w-full h-48">
        {property.images?.[0] ? (
          <Image
            src={basedUrl + property.images?.[0] || "/placeholder.svg"}
            alt={property.title || "Property Image"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {property.title || property.project_name || "Untitled Property"}
        </h3>

        {property.city && (
          <p className="text-sm text-gray-500 mt-1">{property.city}</p>
        )}

        {property.property_type && (
          <p className="text-sm text-gray-500 mt-1 capitalize">
            {property.property_type.replace("_", " ")}
          </p>
        )}

        {property.expected_price && (
          <p className="text-black font-bold mt-2">
            ₹{parseFloat(property.expected_price).toLocaleString()} Lacs
          </p>
        )}

        <div className="flex items-center justify-start gap-4 mt-2 text-sm text-gray-500">
          {property.bedrooms !== undefined && <span>{property.bedrooms} Beds</span>}
          {property.bathrooms !== undefined && <span>{property.bathrooms} Baths</span>}
          {property.balconies !== undefined && <span>{property.balconies} Balcony</span>}
        </div>
      </div>
    </Link>
  );
}
