"use client";
import { motion } from "framer-motion";
import HomeCard from "../ui/home-card";
import { useGetPropertyQuery } from "@/service/propertyApi";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function FeaturedProjects() {
    const { data, isLoading } = useGetPropertyQuery();

    return (
        <section className="py-16 featured-gradient overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-2xl md:text-3xl font-bold mb-12 text-center"
                >
                    Handpicked Featured Projects
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {isLoading ? (
                        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-[300px] bg-gray-200 animate-pulse rounded-2xl" />
                            ))}
                        </div>
                    ) : (
                        <Carousel
                            opts={{
                                align: "start",
                                slidesToScroll: 1,
                            }}
                            className="max-w-5xl mx-auto"
                        >
                            <CarouselContent className="-ml-4">
                                {data?.data?.map((property, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                                            <HomeCard property={property} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex text-black cursor-pointer" />
                            <CarouselNext className="hidden md:flex text-black cursor-pointer" />
                        </Carousel>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedProjects;


