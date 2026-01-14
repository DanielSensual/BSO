"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { Check, Star } from "lucide-react";

// Membership tiers data
const membershipTiers = [
    {
        id: 1,
        name: "Starter",
        price: "$129",
        period: "/month",
        tagline: "For New Dancers",
        features: [
            "Mon 6:45PM Bachata Basics Lvl1",
            "Mon 7:45PM Body Movement",
            "Wed 6:45PM Salsa Basics Lvl1",
            "Wed 7:45PM Salsa Footwork",
            "Monthly Sat/Sun Beginner Bachata",
            "Members Only Practica",
            "7-Day Money Back Guarantee",
        ],
        highlight: "As low as $7 per class",
        popular: false,
        badge: null,
    },
    {
        id: 2,
        name: "Experienced",
        price: "$169",
        period: "/month",
        tagline: "For Dancers with Previous Bachata Experience",
        features: [
            "Mon 6:45PM Bachata Basics Lvl1",
            "Mon 7:45PM Body Movement",
            "Mon 8:15PM Sensual Bachata Lvl2",
            "Wed 6:45PM Salsa Basics Lvl1",
            "Wed 7:45PM Footwork Class",
            "Wed 8:15PM Zouk Basics Lvl 2",
            "Monthly Sat/Sun Beginner Bachata",
            "Monthly Members Only Practica",
            "7-Day Money Back Guarantee",
        ],
        highlight: "As low as $7 per class",
        popular: false,
        badge: null,
    },
    {
        id: 3,
        name: "Starter+",
        price: "$154",
        period: "/month",
        tagline: "For New Dancers - Includes Thursday",
        features: [
            "Everything in Starter Membership",
            "PLUS Level 1 Thursday Classes",
            "Thu 6:45PM Bachata Dominicana Lvl1",
            "7-Day Money Back Guarantee",
        ],
        highlight: "As low as $6 per class",
        popular: true,
        badge: "MOST POPULAR",
    },
    {
        id: 4,
        name: "Experienced+",
        price: "$194",
        period: "/month",
        tagline: "For Dancers with Previous Bachata Experience - Includes Thursday",
        features: [
            "Everything in Experienced membership",
            "PLUS Thursday Level 1 & 2 Classes",
            "Thu 6:45PM Bachata Dominicana Lvl1",
            "Thu 7:45PM Sensual Bachata Partnerwork Lvl2",
            "Thu 8:45PM Bachata Solo Dance Lvl2",
            "7-Day Money Back Guarantee",
        ],
        highlight: "As low as $5 per class",
        popular: false,
        badge: "BEST VALUE",
    },
];

// Schedule data
const weeklySchedule = [
    {
        day: "MONDAY",
        classes: [
            { time: "6:45 - 7:45PM", name: "Bachata Basics", level: "Lvl1" },
            { time: "7:45 - 8:15PM", name: "Body Movement", level: "Lvl1/2" },
            { time: "8:45 - 9:15PM", name: "Sensual Bachata Foundations", level: "Lvl2" },
            { time: "9:15 - 10:15PM", name: "Advanced Bachata", level: "Lvl3" },
        ],
    },
    {
        day: "TUESDAY",
        classes: [
            { time: "7:30 - 9:00PM", name: "Sensual Bachata Training Team", level: "Lvl 4" },
            { time: "9:00 - 10:30PM", name: "AyJ Show Team", level: "Lvl 5" },
        ],
    },
    {
        day: "WEDNESDAY",
        classes: [
            { time: "6:45 - 7:45PM", name: "Salsa Basics", level: "Lvl1" },
            { time: "7:45 - 8:15PM", name: "Salsa Footwork", level: "Lvl1/2" },
            { time: "8:15 - 9:15PM", name: "Zouk Basics", level: "Lvl 2" },
            { time: "9:15 - 10:15PM", name: "Advanced Bachata", level: "Lvl3" },
        ],
    },
    {
        day: "THURSDAY",
        classes: [
            { time: "6:45 - 7:45PM", name: "Bachata Dominicana by Fabiola", level: "Lvl1" },
            { time: "7:45 - 8:45PM", name: "Sensual Bachata Partnerwork", level: "Lvl2" },
            { time: "8:45 - 9:45PM", name: "Bachata Solo Dance", level: "Lvl2" },
        ],
    },
    {
        day: "SATURDAY",
        classes: [
            { time: "7:30 - 9:00PM", name: "Beginner Bachata & Practica", level: "Lvl1" },
            { time: "9:00 - 10:00PM", name: "Sensual Bachata", level: "Lvl3" },
            { time: "10:00PM - 1AM", name: "Social Dancing", level: "All" },
        ],
    },
    {
        day: "SUNDAY",
        classes: [
            { time: "6:00pm - 10:00PM", name: "Students Practica & Hangout", level: "All" },
        ],
    },
];

// FAQ data specific to start page
const startFaqs = [
    {
        question: "I've never danced before. Which class is for me?",
        answer: "Our Progressive Program starts everyone at absolute zero on Day 1. You'll be in a closed group with other complete beginners—no one is ahead of you, no pressure to \"catch up.\" We've taught hundreds of people who thought they had \"two left feet.\" By the end of Month 1, most are dancing confidently at weddings, parties, and socials. Start with Level 1 (Starter Membership).",
    },
    {
        question: "I have previous dance experience. Which membership should I get?",
        answer: "Experienced Membership. You'll take Level 1 + Level 2 Progressive Programs simultaneously. We're a specialty bachata school. Our Level 1 goes deeper than most schools' beginner programs—even experienced dancers benefit from rebuilding foundations correctly.",
    },
    {
        question: "How long until I feel comfortable dancing at a wedding or party?",
        answer: "Most students feel comfortable after Month 1 (4 weeks). You'll know basic bachata and salsa steps, timing and musicality, and how to lead or follow confidently. By Month 3, you'll feel confident on any dance floor.",
    },
    {
        question: "Do I need a partner?",
        answer: "No. Most people come solo. You'll rotate partners during class, which actually makes you a better dancer—you learn how to dance with anyone, not just one person.",
    },
    {
        question: "What's a \"Progressive Program\"? Why not just drop-in classes?",
        answer: "Drop-in classes are chaotic: mixed skill levels, no structure, constantly trying to catch up. Our Progressive Program is different. You move through Month 1 → Month 2 → Month 3 with a closed group. Everyone starts together. Clear progression. Clear goals. You always know what you're working on next. That's why our students improve so fast.",
    },
    {
        question: "How does the 7-day guarantee work?",
        answer: "You pay when you sign up and attend your first week of classes. If you're not satisfied after 7 days, simply text \"REFUND\" to (321) 320-9483 and we'll issue a 100% refund immediately—no questions asked.",
    },
    {
        question: "Does my membership include Thursday classes?",
        answer: "Memberships do not include Thursday classes. If you'd like access, you can add Thursday classes for $25/month. This gives you access to Bachata Dominicana, Sensual Bachata Partnerwork, and Solo Dance classes on Thursdays.",
    },
    {
        question: "Where are classes held?",
        answer: "Bachata Sensual Orlando, 7800 S US HWY 17 92, Unit 124, Fern Park, FL 32730",
    },
];

export default function StartPage() {
    const [showSchedule, setShowSchedule] = useState(false);

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-16 bg-gradient-to-b from-[#8A6CD9]/20 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-2 bg-[#8A6CD9]/20 text-[#8A6CD9] rounded-full text-sm font-medium mb-6">
                            Join the January Program
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Progressive Bachata & Salsa Programs
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-3xl mx-auto mb-8">
                            Learn to dance Salsa & Bachata at Bachata Sensual Orlando!
                            Classes at all levels, including absolute beginner classes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-[#A0A0A0]">
                            <span className="flex items-center gap-2">
                                <Check size={16} className="text-[#8A6CD9]" />
                                No partner needed
                            </span>
                            <span className="flex items-center gap-2">
                                <Check size={16} className="text-[#8A6CD9]" />
                                7-day money-back guarantee
                            </span>
                            <span className="flex items-center gap-2">
                                <Check size={16} className="text-[#8A6CD9]" />
                                Complete beginners welcome
                            </span>
                        </div>
                    </div>
                </section>

                {/* Membership Tiers */}
                <section className="py-16 bg-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Choose Your Membership
                            </h2>
                            <p className="text-[#A0A0A0]">
                                All memberships include a 7-day, 100% money-back guarantee
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {membershipTiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    className={`relative rounded-2xl p-6 ${tier.popular
                                            ? "bg-gradient-to-b from-[#8A6CD9]/30 to-[#1E1E1E] border-2 border-[#8A6CD9]"
                                            : tier.badge
                                                ? "bg-[#1E1E1E] border-2 border-[#8A6CD9]/50"
                                                : "bg-[#1E1E1E] border border-white/5"
                                        }`}
                                >
                                    {/* Badge */}
                                    {tier.badge && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${tier.popular ? "bg-[#8A6CD9] text-white" : "bg-white/10 text-[#8A6CD9]"
                                                }`}>
                                                {tier.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="text-center mb-6 pt-2">
                                        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-3xl font-bold text-white">{tier.price}</span>
                                            <span className="text-[#A0A0A0] text-sm">{tier.period}</span>
                                        </div>
                                        <p className="text-[#8A6CD9] text-sm mt-2">{tier.tagline}</p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <Check size={14} className="text-[#8A6CD9] mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-[#A0A0A0]">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Highlight */}
                                    <div className="text-center text-sm text-[#8A6CD9] font-medium mb-4">
                                        {tier.highlight}
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href="https://www.bsolatindance.com/start"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${tier.popular
                                                ? "bg-[#8A6CD9] text-white btn-glow hover:bg-[#7B5DC8]"
                                                : "bg-[#8A6CD9]/10 text-[#8A6CD9] hover:bg-[#8A6CD9]/20"
                                            }`}
                                    >
                                        Join Now
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Thursday Add-on */}
                        <div className="mt-8 text-center">
                            <div className="inline-block bg-[#1E1E1E] rounded-xl px-6 py-4 border border-white/5">
                                <p className="text-white font-medium">
                                    Add Thursday Classes to any membership
                                </p>
                                <p className="text-[#8A6CD9] text-lg font-bold">
                                    Only +$25/month
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Schedule Section */}
                <section className="py-16 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Weekly Class Schedule
                            </h2>
                            <button
                                onClick={() => setShowSchedule(!showSchedule)}
                                className="text-[#8A6CD9] hover:underline"
                            >
                                {showSchedule ? "Hide Schedule" : "View Full Schedule"}
                            </button>
                        </div>

                        {showSchedule && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {weeklySchedule.map((day) => (
                                    <div
                                        key={day.day}
                                        className="bg-[#1E1E1E] rounded-xl p-6 border border-white/5"
                                    >
                                        <h3 className="text-[#8A6CD9] font-bold mb-4">{day.day}</h3>
                                        <ul className="space-y-3">
                                            {day.classes.map((cls, i) => (
                                                <li key={i} className="text-sm">
                                                    <span className="text-[#A0A0A0] block">{cls.time}</span>
                                                    <span className="text-white">{cls.name}</span>
                                                    <span className="text-[#8A6CD9] ml-2">({cls.level})</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-[#121212]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <FAQAccordion faqs={startFaqs} />
                    </div>
                </section>

                {/* Testimonials Teaser */}
                <section className="py-16 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Hear From Your Peers
                        </h2>
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={24} className="fill-[#8A6CD9] text-[#8A6CD9]" />
                            ))}
                        </div>
                        <a
                            href="https://share.google/AEMCkWtCSrSTAHQdz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8A6CD9] hover:underline"
                        >
                            See Our Google Reviews →
                        </a>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 bg-gradient-to-b from-[#121212] to-[#8A6CD9]/10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Start Dancing?
                        </h2>
                        <p className="text-[#A0A0A0] text-lg mb-8">
                            Join the January program and transform your dance skills
                        </p>
                        <a
                            href="https://www.bsolatindance.com/start"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#8A6CD9] text-white font-semibold rounded-full btn-glow hover:bg-[#7B5DC8] transition-all"
                        >
                            Join the January Program
                        </a>
                        <p className="text-[#A0A0A0] text-sm mt-4">
                            Still have questions? Text us: <span className="text-white">321-320-9483</span>
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
