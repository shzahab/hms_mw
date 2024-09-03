import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// ... rest of the imports remain the same
import { Button } from "@/components/ui/button"
import productsData from '@/app/data/products.json'
import Header from '@/components/header'
import Footer from '@/components/footer'



export const dynamic = 'force-dynamic'

function getProductById(id: number) {
  return productsData.products.find((p) => p.id === id);
}

function getRandomProducts(count: number, excludeId: number) {
  const filteredProducts = productsData.products.filter((p: { id: number }) => p.id !== excludeId);
  const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const safeProduct = product as NonNullable<typeof product>;

  const otherProducts = getRandomProducts(4, productId);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{safeProduct.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image
                src={safeProduct.mainImage}
                alt={safeProduct.name}
                width={600}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg mb-6">{safeProduct.fullDescription}</p>
              <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {safeProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button size="lg" className="w-full sm:w-auto">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Product Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {safeProduct.gallery.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${safeProduct.name} - Image ${index + 1}`}
                width={300}
                height={300}
                className="w-full rounded-lg shadow"
              />
            ))}
          </div>
          <div className="bg-muted rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Need More Information?</h2>
            <p className="text-center mb-6">
              Our team of experts is ready to assist you with any questions you may have about our Bar / Rebar Bending Machine.
            </p>
            <div className="flex justify-center">
            <Link href="/contact" className="inline-block">
              <Button size="lg" className="rounded-full">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
            </Link>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-8">Other Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {otherProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={product.mainImage}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">{product.shortDescription}</p>
                <Link href={`/product/${product.id}`} passHref>
                  <Button variant="link" className="p-0 h-auto text-sm sm:text-base font-medium text-primary group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  )
}

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