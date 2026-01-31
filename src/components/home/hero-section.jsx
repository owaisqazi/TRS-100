"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

function AnimatedCounter({ target }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, target, {
            duration: 2,
            ease: "easeOut",
        });

        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [count, target, rounded]);

    return <span className="flex items-center font-bold">{displayValue}<Plus /></span>;
}

function HeroSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/assets/video/bg_new_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl text-white"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Digital Platform For Builders, Agents & Customers.
                    </h1>
                    <p className="md:text-lg text-sm mb-8 max-w-xl font-normal">
                        We provide a complete service for the sale, purchase or rental of real estate. Get access to exclusive
                        network & properties that suit your needs.
                    </p>

                    <div className="flex flex-wrap md:gap-12 mt-12 md:justify-normal justify-between">
                        <div className="text-center pr-5 md:pr-12 border-r-2 border-white">
                            <h2 className="text-2xl md:text-5xl font-bold">
                                {inView && <AnimatedCounter target={300} />}
                            </h2>
                            <p className="md:text-lg text-sm font-bold mt-1">HAPPY<br />CUSTOMERS</p>
                        </div>
                        <div className="text-center pr-5 md:pr-12 border-r-2 border-white">
                            <h2 className="text-2xl md:text-5xl font-bold">
                                {inView && <AnimatedCounter target={900} />}
                            </h2>
                            <p className="md:text-lg text-sm font-bold mt-1">RERA<br />PROJECTS</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl md:text-5xl font-bold">
                                {inView && <AnimatedCounter target={200} />}
                            </h2>
                            <p className="md:text-lg text-sm font-bold mt-1">AGENTS<br />NETWORK</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}

export default HeroSection;
