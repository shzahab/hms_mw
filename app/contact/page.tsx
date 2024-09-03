
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, ArrowLeft, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hutaib Machinery and Spares | Industrial Equipment Specialists',
  description: 'Hutaib Machinery and Spares offers high-quality industrial machinery and spare parts. With over 20 years of experience, we provide efficient solutions for various industries.',
  keywords: 'industrial machinery, spare parts, Hutaib, manufacturing equipment',
  openGraph: {
    title: 'Hutaib Machinery and Spares | Industrial Equipment Specialists',
    description: 'High-quality industrial machinery and spare parts for efficient manufacturing solutions.',
    images: [
      {
        url: 'https://example.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Hutaib Machinery and Spares',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Hutaib Machinery and Spares</h2>
                <p className="text-muted-foreground mb-6">Your trusted partner in industrial machinery</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      No. 78, NR Road, KR Market, Bengaluru, Karnataka 560002, India.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>+91 9886474441</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>sales@hutaibmachinery.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919740035153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.132076087827!2d77.57841997689123!3d12.963399315054334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e0f19a0d6d%3A0x64a8fde832d444cc!2sHutaib%20Machinery%20%26%20Spares%20(NR%20Road%20Branch)!5e0!3m2!1sen!2sin!4v1725374934709!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Quick Contact</h2>
                <p className="mb-6">
                  Need immediate assistance? Our team is ready to help you with any inquiries about our machinery and spare parts.
                </p>
                <a href="tel:+919886474441" className="w-full">
                <Button variant="secondary" size="lg" className="w-full">
                  <span>Call Us Now +91 98864 74441 </span>
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  )
}

