"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, secondaryLinks } from "@/lib/data";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/5"
                    : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="BSO Latin Dance"
                                width={140}
                                height={64}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#A0A0A0] hover:text-white transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {secondaryLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#A0A0A0] hover:text-white transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Member Login Button (Desktop) */}
                        <div className="hidden md:block">
                            <a
                                href="https://www.bsolatindance.com/start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all font-medium"
                            >
                                Member Login
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#1E1E1E] z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full p-6">
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-white"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col space-y-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg text-white hover:text-[#8A6CD9] transition-colors py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <div className="border-t border-white/10 my-4" />
                                    {secondaryLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg text-[#A0A0A0] hover:text-white transition-colors py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto">
                                    <a
                                        href="https://www.bsolatindance.com/start"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center px-5 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all font-medium"
                                    >
                                        Member Login
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
