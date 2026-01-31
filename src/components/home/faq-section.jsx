"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQSection = ({ faqs }) => {
    const [openFAQ, setOpenFAQ] = useState(null)
    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    return (
        <section className="patner-gradient py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl text-white font-bold text-center">Frequently asked questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs?.map((faq) => (
                        <div
                            key={faq?.id}
                            className="bg-gray-800 rounded-lg cursor-pointer border border-gray-700 hover:border-gray-600 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(faq?.id)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-500/20 rounded-lg cursor-pointer"
                            >
                                <span className="text-white font-medium text-lg pr-4">{faq?.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${openFAQ === faq?.id ? "transform rotate-180" : ""}`}
                                />
                            </button>

                            {openFAQ === faq?.id && (
                                <div className="px-6 pb-4">
                                    <div className="border-t border-gray-700 pt-4">
                                        <p className="text-gray-300 leading-relaxed">{faq?.answer}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection
