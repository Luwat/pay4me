import Image from "next/image"
import Link from "next/link"
import DownloadButton from "../DownloadButton"

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm px-4 py-3 rounded-full mx-4 mt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg" alt="Pay4Me App Logo" width={24} height={24} className="bg-[#8CD867]" />
          <span className="text-white font-medium">Pay4Me App</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-300">
            Blog
          </Link>
          <Link href="/support" className="text-white hover:text-gray-300">
            Support
          </Link>
          <DownloadButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;