"use client";
import { basedUrl } from "@/libs/based-url";
import Image from "next/image";
import Link from "next/link";

function HomeCard({ property }) {
    const mainImage = property?.images?.length > 0 ? basedUrl + property?.images[0] : "/assets/images/detail/image4.jpg";

    return (
        <Link
            href={`/property-detail-dark/${property?.id}`}
            className="relative bg-white border border-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-[320px]"
        >
            <div className="relative h-40 w-full">
                <Image
                    src={mainImage}
                    alt={property?.title}
                    width={300}
                    height={300}
                    className="h-40 w-full object-cover rounded-t-2xl"
                />
            </div>

            <div className="p-4 flex-1 w-40">
                <h3 className="text-lg font-bold text-black">{property?.title?.slice(0, 12)}...</h3>
                <p className="text-md text-black mt-8">{property?.city}</p>
                <p className="text-md text-nowrap font-bold text-black mt-2">₹ {property?.expected_price} Cr ₹ {property?.booking_amount} Cr</p>
            </div>

            <div className="absolute top-32 right-4 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                <Image
                    src={mainImage}
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover rounded-full"
                />
            </div>
            {/* <div className="absolute bottom-12 right-7 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                <Image
                    src={mainImage}
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-full"
                />
            </div> */}
        </Link>
    );
}

export default HomeCard;
