"use client";

import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                />

                {/* Purple-to-black gradient overlay for brand feel + legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#8A6CD9]/40 via-[#121212]/80 to-[#121212]" />

                {/* Purple glow accent */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A6CD9]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8A6CD9]/10 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-[#1E1E1E]/80 rounded-full border border-white/10 mb-8">
                        <span className="w-2 h-2 bg-[#8A6CD9] rounded-full mr-2 animate-pulse" />
                        <span className="text-sm text-[#A0A0A0]">Now enrolling for 2025</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Master Bachata
                        <br />
                        <span className="text-[#8A6CD9]">in Orlando.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] mb-10 max-w-2xl mx-auto">
                        Progressive programs. No partner needed.
                        <br className="hidden sm:block" />
                        Real results in weeks.
                    </p>

                    {/* CTAs */}
                    <CTAButtons className="justify-center" />

                    {/* Micro-trust line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-6 text-sm text-[#A0A0A0]"
                    >
                        ✓ 7-day money-back guarantee &nbsp; • &nbsp; ✓ Beginners welcome
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-3 bg-white/40 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
