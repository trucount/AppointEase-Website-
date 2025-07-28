"use client"

import { Check, Star, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      popular: false,
      features: [
        "Complete appointment scheduling",
        "Task management system",
        "Team collaboration tools",
        "1.5 GB cloud storage",
        "Cross-platform access",
        "Email support",
        "Basic customization",
        "Google integrations",
      ],
    },
    {
      name: "Professional",
      price: "₹9,999",
      period: "one-time",
      description: "Ideal for growing businesses with advanced needs",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced analytics & reports",
        "Custom branding & UI",
        "5 GB cloud storage",
        "Priority support",
        "API access",
        "Advanced integrations",
        "Custom workflows",
        "Multi-location support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited cloud storage",
        "Dedicated support manager",
        "Custom module development",
        "On-premise deployment",
        "Advanced security features",
        "Training & onboarding",
        "SLA guarantee",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no monthly subscriptions. Own your software
            forever.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-3 font-semibold ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Additional Storage?</h3>
            <p className="text-gray-600 mb-4">
              Expand your storage capacity as your business grows. Pay only for what you use.
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-2">₹2.02 per GB/month</div>
            <p className="text-sm text-gray-600">10% cheaper than market average • No long-term commitments</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
