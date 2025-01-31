"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Pay4Me App?",
    answer:
      "The Pay4Me App is a financial technology platform designed to simplify international payments for education and relocation purposes.",
  },
  {
    question: "What is the payment processing timeline on the Pay4Me App?",
    answer: "Our payment processing typically takes 24-48 hours, depending on the payment method and destination.",
  },
  {
    question: "How does the Pay4Me App work?",
    answer:
      "The app allows you to make secure international payments through a simple, user-friendly interface. Just select your payment method, enter the details, and confirm your transaction.",
  },
  {
    question: "How do I get started using the Pay4Me App?",
    answer:
      "Download the app from your device's app store, create an account, verify your identity, and you're ready to start making payments.",
  },
]

const FAQSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e5f7d3] text-black mb-8">
          FAQS
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Got Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">We&apos;ve got answers</p>
            <Image
              src=""
              alt="Student using phone"
              width={500}
              height={600}
              className="rounded-3xl"
            />
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection;