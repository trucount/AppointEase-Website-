"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Testimonials } from "@/components/testimonials"
import { Industries } from "@/components/industries"
import { PricingSection } from "@/components/pricing-section"
import { Security } from "@/components/security"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <Industries />
      <PricingSection />
      <Security />
      <Contact />
      <Footer />
    </div>
  )
}
