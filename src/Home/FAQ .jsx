import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know what visa I need?",
      answer:
        "You can check visa requirements by selecting your destination country on our platform. It will guide you through the necessary visas and their requirements.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The processing time varies depending on the country and type of visa. On average, it can take from a few days to a few weeks. Real-time updates are provided on your application status.",
    },
    {
      question: "Can I track my visa application?",
      answer:
        "Yes, you can track your visa application by logging into your account. We provide real-time updates on the progress of your application.",
    },
    {
      question: "What documents do I need for the application?",
      answer:
        "The required documents depend on the visa type and the destination country. Common documents include a valid passport, proof of financial support, and visa application forms.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {openFAQ === index && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
