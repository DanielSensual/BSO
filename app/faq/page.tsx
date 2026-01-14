import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";
import { PrimaryButton } from "@/components/CTAButtons";

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-24 bg-gradient-to-b from-[#8A6CD9]/10 to-[#121212]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto">
                            Everything you need to know about our classes, memberships, and community.
                        </p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="py-16 bg-[#121212]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                {/* Still Have Questions */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-[#A0A0A0] text-lg mb-8">
                            Can't find what you're looking for? Reach out and we'll be happy to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E1E1E] text-white font-semibold rounded-full border border-white/10 hover:bg-[#2a2a2a] transition-all"
                            >
                                Contact Us
                            </a>
                            <PrimaryButton text="Start for $10" href="/classes" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
