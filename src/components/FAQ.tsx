import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How fresh are your oyster mushrooms?",
    answer: "Our oyster mushrooms are harvested daily at our Pune farm and delivered the same day to ensure maximum freshness. They're picked at peak maturity for optimal taste and nutrition."
  },
  {
    question: "What's your delivery area and timing?",
    answer: "We deliver across Maharashtra including Pune, Mumbai, Nashik, Aurangabad, and Kolhapur. Same-day delivery is available for orders placed before 2 PM within Pune. Other cities receive next-day delivery."
  },
  {
    question: "How should I store the mushrooms?",
    answer: "Store mushrooms in the refrigerator in their original packaging or a paper bag. They'll stay fresh for 5-7 days. Avoid plastic bags as they trap moisture."
  },
  {
    question: "Are your mushrooms really organic?",
    answer: "Yes! We're certified organic and grow our mushrooms without chemicals, pesticides, or artificial additives. All our growing processes at our Pune farm follow strict organic standards."
  },
  {
    question: "What if I'm not satisfied with my order?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your order, contact us within 24 hours for a full refund or replacement."
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer: "Yes! We offer competitive pricing for restaurants, hotels, and bulk orders. Contact Dhruvaraj directly for custom pricing and regular supply arrangements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. Find everything you need to know about our fresh organic oyster mushrooms from Pune.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our customer support team is here to help you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Chat with Us
            </button>
            <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Call +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;