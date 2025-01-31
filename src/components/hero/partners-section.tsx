import Image from "next/image"

const PartnersSection = () => {
  const partners = [
    { name: "Across The Horizon", logo: "" },
    { name: "MPower Financing", logo: "" },
    { name: "Prodigy Finance", logo: "" },
    { name: "Techstars", logo: "" },
    { name: "Stripe", logo: "" },
    { name: "Paystack", logo: "" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm mb-12">LEADING BRANDS PARTNER WITH US</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="w-32 h-12 relative">
              <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection;