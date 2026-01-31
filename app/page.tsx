import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ShieldCheck, Waves, Zap, Sun, MapPin, Anchor } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-transparent dark:from-blue-950/40" />
           <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
           {/* Animated blobs for dynamic feel */}
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 drop-shadow-sm">
            Ride the Riptide
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 max-w-prose">
            Experience the ultimate freedom on the water with our premium jet ski rentals. 
            Unmatched speed, safety, and scenery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Your Ride
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full backdrop-blur-xs">
              View Locations
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Riptide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-yellow-500" />}
              title="Top Performance"
              description="Our fleet consists of the latest models, guaranteed to give you the thrill you're looking for."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-10 h-10 text-green-500" />}
              title="Safety First"
              description="Your safety is our priority. We provide top-tier life jackets, safety briefings, and GPS tracking."
            />
            <FeatureCard 
              icon={<Waves className="w-10 h-10 text-blue-500" />}
              title="Crystal Waters"
              description="Located in the heart of Florida's most beautiful coastlines, offering you pristine riding areas."
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Unforgettable Memories</h2>
                <p className="text-lg text-muted-foreground">
                    Whether you are a beginner or a pro, our team ensures you have the time of your life. 
                    Explore hidden coves, race across the open ocean, or just float and soak up the sun.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <Sun className="w-6 h-6 text-orange-500" />
                        <span>Sunrise and Sunset Tours</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-red-500" />
                        <span>Guided Island Hopping</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Anchor className="w-6 h-6 text-gray-500" />
                        <span>Private Group Bookings</span>
                    </li>
                </ul>
            </div>
            <div className="h-[400px] w-full bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Riptide Jet Ski</h3>
              <p className="max-w-xs">
                Premium rentals for the adventure seeker. Located in Sunny Isles, Miami, and Key West.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/locations" className="hover:text-white transition">Locations</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/security" className="hover:text-white transition">Security Policy</Link></li>
                <li><Link href="/data-safety" className="hover:text-white transition">Data Safety</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Riptide Jet Ski Rental. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-md bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <CardContent className="pt-6 text-center">
        <div className="mb-4 inline-flex p-3 rounded-full bg-slate-100 dark:bg-slate-800">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
