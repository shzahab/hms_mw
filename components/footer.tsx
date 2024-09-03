import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
            <Link href="/" aria-label="Go to homepage">
            <Image
              src="/logo.png"
              alt="Hutaib Machinery Logo"
              width={400}
              height={67}
              className="w-48 h-auto sm:w-64 md:w-72 lg:w-80"
            />
            </Link>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link className="text-sm hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <Link className="text-sm hover:text-primary transition-colors" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">No. 78, NR Road, KR Market, Bengaluru, Karnataka 560002</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm">+91 9886474441</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">sales@hutaibmachinery.com</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 transition-colors duration-300">
              <MessageCircle className="h-4 w-4" />
              <Link href="https://wa.me/919740035153" target="_blank" rel="noopener noreferrer">
              <span className="text-sm font-medium">WA: +91 9740035153</span>
              </Link>
            </div>
        </div>
        <div className="border-t border-muted-foreground/20 pt-8 text-center text-sm text-muted-foreground">
          © 2024 Hutaib Machinery and Spares. All rights reserved.
        </div>
      </div>
    </footer>
  )
}