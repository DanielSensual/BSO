"use client";

import { motion } from "framer-motion";

interface Step {
    step: number;
    title: string;
    description: string;
}

interface HowItWorksProps {
    steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
                <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                >
                    {/* Connector line (desktop only) */}
                    {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-0 h-0.5 bg-gradient-to-r from-[#8A6CD9]/50 to-transparent" />
                    )}

                    <div className="text-center">
                        {/* Step number */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8A6CD9]/10 border-2 border-[#8A6CD9]/50 mb-6">
                            <span className="text-2xl font-bold text-[#8A6CD9]">{item.step}</span>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                        <p className="text-[#A0A0A0] leading-relaxed max-w-xs mx-auto">
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
