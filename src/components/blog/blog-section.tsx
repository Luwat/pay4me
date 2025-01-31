"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "How to Navigate International Payments for Education With Ease",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog-TewPu1e0pViek3nlOhUiY2FCZsvQku.png",
    link: "#",
  },
  {
    title: "Importance of getting Insurance before traveling",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog-TewPu1e0pViek3nlOhUiY2FCZsvQku.png",
    link: "#",
  },
  {
    title: "Overcoming Challenges in Foreign Currency Tuition Payments",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog-TewPu1e0pViek3nlOhUiY2FCZsvQku.png",
    link: "#",
  },
]

const BlogSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e5f7d3] text-black mb-4">
            BLOG
          </div>
          <h2 className="text-4xl font-semibold">Latest Blog & Resources</h2>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group">
                  <ArrowRight className="w-10 h-10 p-2 rounded-full bg-[#e5f7d3] transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blog posts available.</p>
        )}
      </div>
    </section>
  )
}

export default BlogSection;