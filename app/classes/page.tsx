import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrimaryButton } from "@/components/CTAButtons";
import { Check, Users, Calendar, Award } from "lucide-react";

const programs = [
    {
        title: "Bachata Beginner",
        description: "Perfect for those with zero dance experience. Learn foundations, basic steps, and partner connection.",
        duration: "8 weeks",
        schedule: "Mon & Wed 7:00 PM",
        features: [
            "Fundamentals of movement",
            "Basic footwork patterns",
            "Partner connection basics",
            "Music interpretation",
        ],
    },
    {
        title: "Bachata Intermediate",
        description: "Build on your foundations with more complex patterns, turns, and styling techniques.",
        duration: "8 weeks",
        schedule: "Mon & Wed 8:15 PM",
        features: [
            "Advanced turn patterns",
            "Body movement & waves",
            "Musicality training",
            "Social dancing prep",
        ],
    },
    {
        title: "Bachata Sensual",
        description: "Master the art of sensual bachata with body isolations, waves, and intimate partner work.",
        duration: "8 weeks",
        schedule: "Tue 8:15 PM",
        features: [
            "Body isolations",
            "Sensual techniques",
            "Lead/follow dynamics",
            "Performance styling",
        ],
    },
    {
        title: "Salsa Beginner",
        description: "Get started with salsa! Learn timing, basic patterns, and the infectious energy of salsa dancing.",
        duration: "6 weeks",
        schedule: "Tue 7:00 PM",
        features: [
            "Salsa timing & rhythm",
            "Basic step patterns",
            "Simple turn sequences",
            "Partner connection",
        ],
    },
];

const benefits = [
    {
        icon: Users,
        title: "No Partner Needed",
        description: "We rotate partners so you learn to dance with everyone and improve faster.",
    },
    {
        icon: Calendar,
        title: "Progressive Curriculum",
        description: "Each week builds on the previous. You'll see real, measurable improvement.",
    },
    {
        icon: Award,
        title: "Expert Instructors",
        description: "Learn from professional dancers with years of teaching experience.",
    },
];

export default function ClassesPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-24 bg-gradient-to-b from-[#8A6CD9]/10 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Dance Programs
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Structured curriculum designed to take you from beginner to confident dancer.
                            Start your journey today.
                        </p>
                        <PrimaryButton text="Start for $10" href="/schedule" />
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#8A6CD9]/10 mb-4">
                                        <benefit.icon size={24} className="text-[#8A6CD9]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-[#A0A0A0] text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Programs Grid */}
                <section className="py-24 bg-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Available Programs
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {programs.map((program, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1E1E1E] rounded-2xl p-8 border border-white/5 hover:border-[#8A6CD9]/30 transition-colors"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                                    <p className="text-[#A0A0A0] mb-4">{program.description}</p>

                                    <div className="flex gap-4 mb-6 text-sm">
                                        <span className="px-3 py-1 bg-[#8A6CD9]/10 text-[#8A6CD9] rounded-full">
                                            {program.duration}
                                        </span>
                                        <span className="px-3 py-1 bg-white/5 text-[#A0A0A0] rounded-full">
                                            {program.schedule}
                                        </span>
                                    </div>

                                    <ul className="space-y-2">
                                        {program.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm">
                                                <Check size={16} className="text-[#8A6CD9] mr-2 flex-shrink-0" />
                                                <span className="text-[#A0A0A0]">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Start?
                        </h2>
                        <p className="text-[#A0A0A0] text-lg mb-8">
                            Try your first class for just $10. 7-day money-back guarantee.
                        </p>
                        <PrimaryButton text="Start for $10" href="/schedule" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
