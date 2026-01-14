"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                    <div
                        className={`bg-[#1E1E1E] rounded-xl border transition-colors ${openIndex === index
                                ? "border-[#8A6CD9]/50"
                                : "border-white/5 hover:border-white/10"
                            }`}
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between p-5 text-left"
                            aria-expanded={openIndex === index}
                        >
                            <span className="text-white font-medium pr-4">{faq.question}</span>
                            <ChevronDown
                                size={20}
                                className={`text-[#8A6CD9] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 pb-5">
                                        <p className="text-[#A0A0A0] leading-relaxed">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
