import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8CD867]/10 text-sm text-gray-800 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#8CD867] mr-2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
          SECURE.GLOBAL.FAST
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight mb-6">
          Reliable Payment Solutions for International Education
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government
          agencies worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button className="bg-[#8CD867] text-black hover:bg-[#7ac756] flex items-center gap-2 h-12 px-6">
            Download app
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-apple"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 h-12 px-6">
            Watch Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt={`User ${i}`}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">Trusted by 3k+ Students Globally</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-16 top-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
            <Image src="/placeholder.svg" alt="Techstars" width={32} height={32} className="rounded" />
            <div className="text-sm">
              <p className="font-medium">Backed by</p>
              <p>Techstars</p>
            </div>
          </div>

          <div className="absolute -right-8 top-1/3 bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/placeholder.svg" alt="Google" width={20} height={20} />
              <div className="flex text-yellow-400">{"★★★★★"}</div>
            </div>
            <p className="text-sm">5 star Google rating</p>
          </div>

          <div className="absolute right-16 top-8 bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Wallet Balance</p>
              <span className="bg-gray-100 text-xs px-2 py-1 rounded">$ USD</span>
            </div>
            <p className="text-2xl font-bold mb-4">$ 22,850.00</p>
            <div className="flex gap-4">
              <button className="text-sm text-[#8CD867] flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Fund Wallet
              </button>
              <button className="text-sm text-gray-600 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                Withdraw
              </button>
            </div>
          </div>

          <div className="relative rounded-full overflow-hidden bg-[#E9F5E3]">
            <Image
              src="/student-using-pay-4-me.png"
              alt="Student using Pay4Me App"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

