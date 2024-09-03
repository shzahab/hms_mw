import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import productsData from '@/app/data/products.json'
import Header from '@/components/header'
import Footer from '@/components/footer'


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

export default function HomePage() {
  const products = productsData.products

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
        <section className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">Hutaib Machinery and Spares</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            With over two decades of experience, Hutaib Machinery and Spares has been at the forefront of industrial innovation. 
            We specialize in providing high-quality machinery and spare parts that drive efficiency and productivity across various industries. 
            Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses worldwide.
          </p>
        </section>
        <section className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
            <div key={product.id} className="group bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square bg-muted overflow-hidden">
                  <Image
                    src={product.mainImage}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.shortDescription}</p>
                <Link href={`/product/${product.id}`} passHref>
                  <Button variant="link" className="p-0 h-auto text-sm font-medium text-primary group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Need Custom Solutions?</h2>
            <p className="text-center text-muted-foreground mb-8">
              We specialize in tailoring our products to meet your specific requirements. 
              Contact us to discuss how we can help optimize your operations.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link> 
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  )
}