"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface OfferingCardProps {
    title: string;
    description: string;
    image: string;
    href: string;
    index?: number;
}

export default function OfferingCard({
    title,
    description,
    image,
    href,
    index = 0,
}: OfferingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={href} className="group block">
                <div className="overflow-hidden rounded-2xl bg-[#1E1E1E] card-hover">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#8A6CD9]/0 group-hover:bg-[#8A6CD9]/10 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#8A6CD9] transition-colors">
                                    {title}
                                </h3>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                                <div className="w-10 h-10 rounded-full bg-[#8A6CD9]/10 flex items-center justify-center group-hover:bg-[#8A6CD9] transition-colors">
                                    <ArrowUpRight
                                        size={18}
                                        className="text-[#8A6CD9] group-hover:text-white transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
