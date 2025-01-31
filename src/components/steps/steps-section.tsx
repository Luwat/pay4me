import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Apple } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Download the Mobile App",
    description: "Get started by downloading our mobile app, available on iOS and Android.",
    image: "/placeholder.svg",
  },
  {
    number: "2",
    title: "Sign up on the app",
    description: "Sign up with your details, verify your identity, and set up your payment preferences.",
    image: "/placeholder.svg",
  },
  {
    number: "3",
    title: "Setup Payment Details",
    description: "Securely link your local bank account or mobile wallet to the Pay4me app.",
    image: "/placeholder.svg",
  },
  {
    number: "4",
    title: "Complete Your Payment",
    description: "Choose your preferred payment method and finalize the transaction securely.",
    image: "",
  },
]

const StepsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e5f7d3] text-black mb-8">
          HOW IT WORKS
        </div>

        <h2 className="text-4xl font-semibold mb-12">4 Simple Steps to Get Started</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-3xl p-8 shadow-sm">
              <span className="text-xl font-semibold text-gray-400 mb-4 block">{step.number}.</span>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-8">{step.description}</p>
              <Image
                src={step.image}
                alt={step.title}
                width={200}
                height={200}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-[#86c649] hover:bg-[#75b538] text-black px-6 py-2 rounded-full">
            <Play className="w-4 h-4 mr-2" />
            Download app
            <Apple className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StepsSection;