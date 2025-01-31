import { ArrowUpRight, Globe, Timer, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Accessibility",
      description:
        "Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.",
    },
    {
      icon: Timer,
      title: "Fast & Reliable Transactions",
      description: "Ensure your payments are processed quickly, helping you meet important deadlines without stress.",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description:
        "Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates.",
    },
  ]

  return (
    <section className="w-full p-8 bg-[#f3fce8] rounded-[32px]">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e5f7d3]">FEATURES</div>

        <h2 className="text-4xl font-semibold mt-6 mb-12">What Truly sets us apart</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 flex flex-col h-full">
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-[#86c649]" />
              </div>

              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>

              <p className="text-gray-600 mb-8 flex-grow">{feature.description}</p>

              <Button variant="outline" className="w-fit bg-[#e5f7d3] hover:bg-[#d3f0b5] border-0 text-black">
                Download app
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default FeaturesSection;