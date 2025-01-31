"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    name: "Jimmy Adewale",
    role: "Entrepreneur",
    image: "",
  },
  {
    name: "Palmer Nicole",
    role: "Phd Student",
    image: "",
  },
  {
    name: "Hannah Adams",
    role: "Senior Therapist",
    image: "",
  },
  {
    name: "Lex Brown",
    role: "Masters Student",
    image: "",
  },
]

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0">
        <Image src="" alt="Decorative shape" width={400} height={400} className="opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e5f7d3] text-black mb-8">
          TESTIMONIALS
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-2xl">
          Don&apos;t take our words for it,
          <br />
          Take theirs.
        </h2>

        <div className="relative">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[400px] bg-white rounded-3xl p-6 shadow-sm">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;