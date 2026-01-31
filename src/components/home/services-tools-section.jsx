"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ServicesToolsSection = ({ services }) => {
  const router = useRouter();

const handleClick = (link) => {
  router.push(link);
};

  return (
    <section className="patner-gradient py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
            TOOLS & SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.map((service, index) => (
            <div
              key={index}
              onClick={() => handleClick(service?.link)}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-2xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service?.img}
                  alt={service?.title || "Image Service"}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Button text */}
              <div className="w-full bg-[#2a1f45] group-hover:bg-[#3a2a5a] text-white font-medium py-2 rounded transition-colors h-12 flex items-center justify-center">
                {service?.btn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesToolsSection;
