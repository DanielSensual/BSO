"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./CTAButtons";

interface PricingCardProps {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
    index?: number;
}

export default function PricingCard({
    name,
    price,
    period,
    description,
    features,
    cta,
    popular = false,
    index = 0,
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-2xl p-8 ${popular
                    ? "bg-gradient-to-b from-[#8A6CD9]/20 to-[#1E1E1E] border-2 border-[#8A6CD9]/50"
                    : "bg-[#1E1E1E] border border-white/5"
                }`}
        >
            {/* Popular badge */}
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#8A6CD9] text-white text-sm font-medium rounded-full">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
                <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{price}</span>
                    <span className="text-[#A0A0A0] ml-1">{period}</span>
                </div>
                <p className="text-[#A0A0A0] text-sm mt-3">{description}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8A6CD9]/20 flex items-center justify-center mr-3 mt-0.5">
                            <Check size={12} className="text-[#8A6CD9]" />
                        </div>
                        <span className="text-[#A0A0A0] text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <div className="text-center">
                {popular ? (
                    <PrimaryButton text={cta} href="/classes" className="w-full" />
                ) : (
                    <SecondaryButton text={cta} href="/classes" className="w-full" />
                )}
            </div>

            {/* Guarantee */}
            {(popular || name.includes("Starter")) && (
                <p className="text-center text-xs text-[#A0A0A0] mt-4">
                    7-day, 100% money-back guarantee
                </p>
            )}
        </motion.div>
    );
}
