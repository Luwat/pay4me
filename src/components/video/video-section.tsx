import { Play } from "lucide-react"

const VideoSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%20demo-YziwBLL1hOX0g0oi8rkalJolYOjwC7.png')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12">Why We Built the Pay4Me App</h2>

        <div className="relative aspect-video max-w-4xl mx-auto">
          <button className="absolute inset-0 w-full h-full flex items-center justify-center group">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white" />
            </div>
          </button>
          <div className="absolute bottom-8 left-8 flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-white font-medium">Pay4Me Team</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection;