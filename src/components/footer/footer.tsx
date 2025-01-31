import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, InstagramIcon as TiktokIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "How it Works", href: "/how-it-works" },
      { name: "Careers", href: "/careers" },
    ],
    resources: [
      { name: "Android Reviews", href: "/android-reviews" },
      { name: "iOS Reviews", href: "/ios-reviews" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQs", href: "/faqs" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "KYC/AML Policy", href: "/kyc-aml" },
    ],
  }

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social Section */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/placeholder.svg" alt="Pay4Me App" width={32} height={32} className="w-8 h-8" />
              <span className="font-semibold text-xl">Pay4Me App</span>
            </div>

            <div className="mb-6">
              <a href="mailto:support@pay4me.app" className="text-gray-600 hover:text-gray-900">
                support@pay4me.app
              </a>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <TiktokIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-6 grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Download Section */}
          <div className="md:col-span-3">
            <p className="text-sm text-gray-600 mb-4">
              Depending on your mobile device, download our awesome native app to start enjoying all the benefits of
              pay4Me.
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Image src="/placeholder.svg" alt="App Store" width={20} height={20} className="w-5 h-5" />
                Download on Appstore
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Image src="/placeholder.svg" alt="Play Store" width={20} height={20} className="w-5 h-5" />
                Download on Playstore
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Pay4Me Logo" width={40} height={40} className="w-10 h-10" />
              <p className="text-sm text-gray-600">© 2020 - 2024 Pay4Me, Inc.</p>
            </div>
            <p className="text-sm text-gray-600 max-w-2xl">
              Pay4Me is a financial technology company making it easier for international students and immigrants to pay
              their tuition and fees in minutes. We offer our products and services in partnership with licensed
              transmitters and banking partners in their respective jurisdictions. All trademarks, logos, and brand
              names are the property of their respective owners. All company, product, and service names used on this
              website are for identification purposes only. Use of these names, trademarks and brands do not imply
              endorsement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;