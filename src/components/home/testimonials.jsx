"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

function Testimonials({ testimonials }) {
    return (
        <>
            <section className="py-16 bg-[url('/assets/images/bg-black.png')] relative overflow-hidden">
                <div className="container mx-auto md:max-w-5xl px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        TESTIMONIALS FROM HAPPY CUSTOMERS
                    </motion.h2>

                    <Carousel
                        opts={{
                            align: "start",
                            slidesToScroll: 1,
                        }}>
                        <CarouselContent className="gap-6">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        className="testi-gradient px-6 py-12 rounded-lg shadow-lg"
                                    >
                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                viewport={{ once: false }}
                                                className="relative w-32 h-32 mb-4 rounded-2xl"
                                            >
                                                <Image
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </motion.div>

                                            <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                                            <p className="text-lg text-gray-400 text-center mb-4">
                                                {testimonial?.desc}
                                            </p>
                                            <div className="flex">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-amber-500" />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex text-black cursor-pointer" />
                        <CarouselNext className="hidden md:flex text-black cursor-pointer" />
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Testimonials
