"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
    };

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-24 bg-gradient-to-b from-[#8A6CD9]/10 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto">
                            We&apos;d love to hear from you. Have a question or want to learn more?
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-16 bg-[#121212]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Contact Information
                                </h2>
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#8A6CD9]/10 rounded-full flex items-center justify-center">
                                            <MapPin size={20} className="text-[#8A6CD9]" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium mb-1">Location</h3>
                                            <p className="text-[#A0A0A0]">Orlando, FL</p>
                                            <p className="text-[#A0A0A0] text-sm">Full address provided after signup</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#8A6CD9]/10 rounded-full flex items-center justify-center">
                                            <Phone size={20} className="text-[#8A6CD9]" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium mb-1">Phone</h3>
                                            <a href="tel:+14075551234" className="text-[#A0A0A0] hover:text-white transition-colors">
                                                (407) 555-1234
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#8A6CD9]/10 rounded-full flex items-center justify-center">
                                            <Mail size={20} className="text-[#8A6CD9]" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium mb-1">Email</h3>
                                            <a href="mailto:info@bsolatindance.com" className="text-[#A0A0A0] hover:text-white transition-colors">
                                                info@bsolatindance.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <h3 className="text-white font-medium mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center hover:bg-[#8A6CD9]/20 transition-colors group"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={20} className="text-[#A0A0A0] group-hover:text-[#8A6CD9]" />
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center hover:bg-[#8A6CD9]/20 transition-colors group"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={20} className="text-[#A0A0A0] group-hover:text-[#8A6CD9]" />
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center hover:bg-[#8A6CD9]/20 transition-colors group"
                                        aria-label="YouTube"
                                    >
                                        <Youtube size={20} className="text-[#A0A0A0] group-hover:text-[#8A6CD9]" />
                                    </a>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-[#1E1E1E] rounded-2xl p-8 border border-white/5">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Send a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-[#A0A0A0] mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#8A6CD9] transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm text-[#A0A0A0] mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#8A6CD9] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm text-[#A0A0A0] mb-2">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#8A6CD9] transition-colors"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="classes">Classes & Memberships</option>
                                            <option value="events">Events & Socials</option>
                                            <option value="rentals">Studio Rentals</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-[#A0A0A0] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#8A6CD9] transition-colors resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#8A6CD9] text-white font-semibold rounded-full btn-glow hover:bg-[#7B5DC8] transition-all"
                                    >
                                        <Send size={18} className="mr-2" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
