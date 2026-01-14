"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    rating: number;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 380;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative">
            {/* Navigation Buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#1E1E1E] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors hidden md:flex"
                aria-label="Previous testimonials"
            >
                <ChevronLeft size={20} className="text-white" />
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#1E1E1E] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors hidden md:flex"
                aria-label="Next testimonials"
            >
                <ChevronRight size={20} className="text-white" />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex-shrink-0 w-[340px] snap-start"
                    >
                        <div className="bg-[#1E1E1E] rounded-2xl p-6 h-full border border-white/5 hover:border-[#8A6CD9]/30 transition-colors">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={16} className="fill-[#8A6CD9] text-[#8A6CD9]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white mb-6 leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div>
                                <p className="text-white font-medium">{testimonial.name}</p>
                                <p className="text-[#A0A0A0] text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
