"use client";
// import Footer from "@/components/footer";
// import Header from "@/components/header";
import { useGetPropertyQuery } from "@/service/propertyApi";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoanModal from "@/components/ui/LoanModal";
// import WhatsapBanner from "@/components/home/whatsap-banner";

function ServicesPropertyDetailId() {
  const { data, isLoading } = useGetPropertyQuery();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (data?.data) {
      setFilteredProperties(data.data);
    }
  }, [data]);

  // 🔍 Search filter
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredProperties(data?.data || []);
    } else {
      const filtered = data?.data?.filter(
        (item) =>
          (item?.title || "").toLowerCase().includes(value) ||
          (item?.city || "").toLowerCase().includes(value) ||
          (item?.project_name || "").toLowerCase().includes(value)
      );

      setFilteredProperties(filtered || []);

      if (!filtered || filtered.length === 0) {
        setShowModal(true);
      }
    }
  };

  // 🔗 Navigate
  const handlePropertyClick = (property) => {
    if (property?.id) {
      router.push(`/property-detail-dark/${property.id}`);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div
        className="flex flex-col text-white bg-[#ffffff] md:m-16 m-3 rounded-4xl py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/property/propertybg1.jpg')",
        }}
      >
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-3 lg:p-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl font-bold text-white mb-2">PropWorth</h1>
              <p className="text-gray-300 text-lg mb-8">
                Check Estimated Transaction Price of any Property
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-green-400 mr-2 h-6 w-6" />
                  <span className="text-gray-200">
                    98% accuracy backed by ML models
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-green-400 mr-2 h-6 w-6" />
                  <span className="text-gray-200">
                    Insight from 1 Crore + listings posted annually
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Box */}
            <div className="flex-1 w-full lg:w-auto p-6 bg-black/70 rounded-lg shadow-xl backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-center relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Enter Project/Locality"
                  className="flex-grow w-full md:w-auto p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-100 mb-4 sm:mb-0 sm:mr-4"
                />
                <button className="w-full sm:w-auto bg-[#1E102F] hover:bg-[#311752] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                  Get Estimate
                </button>

                {/* Dropdown */}
                {searchTerm && filteredProperties?.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white text-black rounded-lg mt-2 shadow-lg max-h-60 overflow-y-auto z-50">
                    {filteredProperties.map((property) => (
                      <li
                        key={property?.id}
                        onClick={() => handlePropertyClick(property)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        {(property?.title || "Untitled")} -{" "}
                        {property?.city || "Unknown"}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="text-gray-300 text-sm mt-4 text-start ps-1">
                Most accurate estimate in just 30 seconds
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* <WhatsapBanner /> */}
      {/* <Footer /> */}

      {/* Modal */}
      <LoanModal isOpen={showModal} setIsOpen={setShowModal} />
    </>
  );
}

export default ServicesPropertyDetailId;
