import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                BSO<span className="text-[#8A6CD9]">.</span>
                            </span>
                        </Link>
                        <p className="text-[#A0A0A0] text-sm mb-6">
                            Orlando&apos;s premier Latin dance studio. Master Bachata, Salsa, and more with our progressive programs.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#A0A0A0] hover:text-[#8A6CD9] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#A0A0A0] hover:text-[#8A6CD9] transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#A0A0A0] hover:text-[#8A6CD9] transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/classes" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link href="/schedule" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/rentals" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Studio Rentals
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/faq" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Code of Conduct
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    Waiver & Policies
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-[#8A6CD9] mt-0.5 flex-shrink-0" />
                                <span className="text-[#A0A0A0] text-sm">
                                    Orlando, FL
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-[#8A6CD9] flex-shrink-0" />
                                <a href="tel:+14075551234" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    (407) 555-1234
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-[#8A6CD9] flex-shrink-0" />
                                <a href="mailto:info@bsolatindance.com" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                                    info@bsolatindance.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[#A0A0A0] text-sm">
                        © {new Date().getFullYear()} BSO Latin Dance. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#A0A0A0] hover:text-white transition-colors text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
