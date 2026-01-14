import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OfferingCard from "@/components/OfferingCard";
import HowItWorks from "@/components/HowItWorks";
import PricingCard from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import { offerings, howItWorks, pricingTiers, testimonials, faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Offerings Section */}
        <section className="py-24 bg-[#121212]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Find Your Path to Dance
              </h2>
              <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
                Whether you&apos;re just starting or leveling up, we have a program designed for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <OfferingCard
                  key={offering.id}
                  title={offering.title}
                  description={offering.description}
                  image={offering.image}
                  href={offering.href}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
                Getting started is simple. Here&apos;s what to expect.
              </p>
            </div>

            <HowItWorks steps={howItWorks} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-[#121212]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
                Choose the membership that fits your schedule and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <PricingCard
                  key={tier.id}
                  name={tier.name}
                  price={tier.price}
                  period={tier.period}
                  description={tier.description}
                  features={tier.features}
                  cta={tier.cta}
                  popular={tier.popular}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Dancers Say
              </h2>
              <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
                Join hundreds of dancers who transformed their skills with BSO.
              </p>
            </div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#121212]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#A0A0A0] text-lg">
                Got questions? We&apos;ve got answers.
              </p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Dancing?
            </h2>
            <p className="text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto">
              Join Orlando&apos;s most progressive Latin dance community.
              No partner needed, beginners welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/classes"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#8A6CD9] text-white font-semibold rounded-full btn-glow hover:bg-[#7B5DC8] transition-all"
              >
                Start for $10
              </a>
              <a
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E1E1E] text-white font-semibold rounded-full border border-white/10 hover:bg-[#2a2a2a] transition-all"
              >
                View Schedule
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
