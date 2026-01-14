import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { events } from "@/lib/data";
import { PrimaryButton } from "@/components/CTAButtons";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

export default function EventsPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-24 bg-gradient-to-b from-[#8A6CD9]/10 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Events & Socials
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto">
                            Practice your moves at our weekly socials and special events.
                            The dance floor is waiting for you.
                        </p>
                    </div>
                </section>

                {/* Events Grid */}
                <section className="py-16 bg-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-[#8A6CD9]/30 transition-colors group"
                                >
                                    {/* Event Image */}
                                    <div className="h-48 relative overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#8A6CD9] transition-colors">
                                            {event.title}
                                        </h3>

                                        <p className="text-[#A0A0A0] text-sm mb-4">
                                            {event.description}
                                        </p>

                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center text-sm">
                                                <Calendar size={14} className="text-[#8A6CD9] mr-2" />
                                                <span className="text-[#A0A0A0]">{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Clock size={14} className="text-[#8A6CD9] mr-2" />
                                                <span className="text-[#A0A0A0]">{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <MapPin size={14} className="text-[#8A6CD9] mr-2" />
                                                <span className="text-[#A0A0A0]">{event.location}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Ticket size={14} className="text-[#8A6CD9] mr-2" />
                                                <span className="text-white font-medium">{event.price}</span>
                                            </div>
                                        </div>

                                        <a
                                            href="#"
                                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#8A6CD9]/10 text-[#8A6CD9] font-medium rounded-full hover:bg-[#8A6CD9]/20 transition-colors"
                                        >
                                            Get Tickets
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Weekly Social Highlight */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-[#8A6CD9] text-sm font-medium mb-4 block">
                            EVERY FRIDAY
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Join Our Weekly Social
                        </h2>
                        <p className="text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto">
                            Free for members! Beginner lesson at 9PM, followed by open dancing until 1AM.
                            The best way to practice what you learn in class.
                        </p>
                        <PrimaryButton text="Become a Member" href="/classes" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
