import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

const DownloadApp = () => {
  return (
    <section className="bg-[#f3fce8] py-16 px-4 rounded-3xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4">
            Download the Pay4Me
            <br />
            App Today!
          </h2>
          <p className="text-gray-600 mb-8">
            Our custom QR code will take you to your app store to download our awesome native apps
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="bg-black text-white hover:bg-black/90">
              <Apple className="w-5 h-5 mr-2" />
              Download on Appstore
            </Button>
            <Button variant="outline" className="bg-black text-white hover:bg-black/90">
              <Play className="w-5 h-5 mr-2" />
              Download on Playstore
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <Image src="" alt="QR Code" width={300} height={300} className="w-full max-w-[300px]" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e5f7d3] transform translate-x-1/2 rounded-l-full" />
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-[#d3f0b5] transform translate-x-1/3 rounded-l-full" />
    </section>
  )
}

export default DownloadApp;