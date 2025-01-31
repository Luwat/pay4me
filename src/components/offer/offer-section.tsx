import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, Apple } from "lucide-react"

const OfferSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e5f7d3] text-black mb-8">
          WHAT WE OFFER
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-3xl">
          Simplified Payments for Your Relocation Dreams
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tuition Card */}
          <div className="bg-[#fff9e6] text-black rounded-3xl p-8">
            <div className="mb-6">
              <Image src="" alt="Lightning icon" width={48} height={48} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Super fast tuition and school fees payments</h3>
            <p className="text-gray-600 mb-8">
              Seamlessly pay local and international educational expenses using our fast and convenient online payments
              platform from the comfort of your home.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Stanford", "Ghana", "BYU", "Other"].map((uni) => (
                <Image
                  key={uni}
                  src=""
                  alt={`${uni} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          {/* Services Card */}
          <div className="bg-[#f0f9ff] text-black rounded-3xl p-8">
            <div className="mb-6">
              <Image src="/placeholder.svg" alt="Document icon" width={48} height={48} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Pay for SEVIS, WES, Visa Applications & More</h3>
            <p className="text-gray-600 mb-8">
              We help you get closer to your study abroad and relocation goals faster by promptly completing your
              payment orders for credential evaluation, immigration, and visa purposes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["SEVIS", "WES", "VISA"].map((service) => (
                <Image
                  key={service}
                  src="/placeholder.svg"
                  alt={`${service} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
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

export default OfferSection;