import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { schedule } from "@/lib/data";
import { PrimaryButton } from "@/components/CTAButtons";

const levelColors: Record<string, string> = {
    Beginner: "bg-green-500/10 text-green-400",
    Intermediate: "bg-yellow-500/10 text-yellow-400",
    "Intermediate+": "bg-orange-500/10 text-orange-400",
    Advanced: "bg-red-500/10 text-red-400",
    "All Levels": "bg-[#8A6CD9]/10 text-[#8A6CD9]",
};

export default function SchedulePage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-24 bg-gradient-to-b from-[#8A6CD9]/10 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Class Schedule
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto">
                            Join us throughout the week. All classes are held at our Orlando studio.
                        </p>
                    </div>
                </section>

                {/* Schedule Grid */}
                <section className="py-16 bg-[#121212]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-6">
                            {schedule.map((day) => (
                                <div
                                    key={day.day}
                                    className="bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5"
                                >
                                    {/* Day Header */}
                                    <div className="bg-[#8A6CD9]/10 px-6 py-4 border-b border-white/5">
                                        <h3 className="text-lg font-semibold text-white">{day.day}</h3>
                                    </div>

                                    {/* Classes */}
                                    <div className="divide-y divide-white/5">
                                        {day.classes.map((cls, index) => (
                                            <div
                                                key={index}
                                                className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[#8A6CD9] font-mono text-sm min-w-[70px]">
                                                        {cls.time}
                                                    </span>
                                                    <div>
                                                        <p className="text-white font-medium">{cls.name}</p>
                                                        <p className="text-[#A0A0A0] text-sm">
                                                            with {cls.instructor}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span
                                                    className={`inline-block px-3 py-1 text-xs rounded-full ${levelColors[cls.level] || levelColors["All Levels"]
                                                        }`}
                                                >
                                                    {cls.level}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            {Object.entries(levelColors).map(([level, color]) => (
                                <span key={level} className={`px-3 py-1 text-xs rounded-full ${color}`}>
                                    {level}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Find Your Class
                        </h2>
                        <p className="text-[#A0A0A0] text-lg mb-8">
                            Not sure which class is right for you? Start with our $10 trial and we&apos;ll help you find your level.
                        </p>
                        <PrimaryButton text="Start for $10" href="/classes" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
