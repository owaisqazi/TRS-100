import { ChevronRight } from "lucide-react"
import Link from "next/link"
import SimilarPropertiesDetail from "@/components/ui/SimilarPropertiesDetail"
function PropertyDetailSimilarProperties({ similarProperties }) {
    return (
        <>
            <div className="bg-gradient-to-b from-[#0d0a1a] to-[#1a1333] py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white">Recommended Properties</h2>
                        <Link href="/property-search" className="text-white flex items-center">
                            View more <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {similarProperties?.slice(0,4)?.map((property, index) => (
                            <SimilarPropertiesDetail property={property} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyDetailSimilarProperties

