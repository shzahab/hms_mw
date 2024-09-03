import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-center mb-4 md:mb-0">
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
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
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
        </div>
      </div>
    </header>
  )
}