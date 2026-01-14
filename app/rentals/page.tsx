import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { rentalPackages } from "@/lib/data";
import { Check, Sparkles, Music, Users, Wifi } from "lucide-react";

const amenities = [
    { icon: Music, label: "Professional Sound System" },
    { icon: Sparkles, label: "Mirrored Walls" },
    { icon: Users, label: "Up to 50 People" },
    { icon: Wifi, label: "Free WiFi" },
];

export default function RentalsPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-24 bg-gradient-to-b from-[#8A6CD9]/10 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Studio Rentals
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto">
                            Host your next rehearsal, workshop, or private event in our
                            professional dance studio.
                        </p>
                    </div>
                </section>

                {/* Amenities */}
                <section className="py-16 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Studio Amenities
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {amenities.map((amenity, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8A6CD9]/10 mb-3">
                                        <amenity.icon size={20} className="text-[#8A6CD9]" />
                                    </div>
                                    <p className="text-[#A0A0A0] text-sm">{amenity.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className="py-24 bg-[#121212]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Rental Packages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {rentalPackages.map((pkg, index) => (
                                <div
                                    key={pkg.id}
                                    className={`bg-[#1E1E1E] rounded-2xl p-8 border ${index === 1
                                            ? "border-[#8A6CD9]/50 relative"
                                            : "border-white/5"
                                        }`}
                                >
                                    {index === 1 && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="px-4 py-1 bg-[#8A6CD9] text-white text-sm font-medium rounded-full">
                                                Best Value
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-2">{pkg.name}</h3>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl font-bold text-white">{pkg.price}</span>
                                            <span className="text-[#A0A0A0] ml-1">{pkg.period}</span>
                                        </div>
                                        <p className="text-[#A0A0A0] text-sm mt-3">{pkg.description}</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8A6CD9]/20 flex items-center justify-center mr-3 mt-0.5">
                                                    <Check size={12} className="text-[#8A6CD9]" />
                                                </div>
                                                <span className="text-[#A0A0A0] text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="/contact"
                                        className="block w-full text-center px-6 py-3 bg-[#8A6CD9]/10 text-[#8A6CD9] font-medium rounded-full hover:bg-[#8A6CD9]/20 transition-colors"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Have Questions?
                        </h2>
                        <p className="text-[#A0A0A0] text-lg mb-8">
                            Contact us for custom packages or to schedule a tour of our studio.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#8A6CD9] text-white font-semibold rounded-full btn-glow hover:bg-[#7B5DC8] transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
