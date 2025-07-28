"use client"

import { Shield, Lock, Key, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Security() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const securityFeatures = [
    {
      icon: Shield,
      title: "AES Encryption",
      description: "Advanced Encryption Standard protects all your data with military-grade security.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Key,
      title: "Your Private Key",
      description: "You set and retain your own encryption key. Complete control over your data access.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Lock,
      title: "End-to-End",
      description: "Data is encrypted from your device to storage. No one can intercept or access it.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Eye,
      title: "Zero Access",
      description: "Even we cannot see your data. Total privacy and compliance guaranteed.",
      color: "from-red-500 to-pink-600",
    },
  ]

  return (
    <section id="security" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Data Security is Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Priority</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security with end-to-end encryption ensures your business data remains private and secure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Complete Data Privacy</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                With AppointEase, your business data stays yours. Our zero-knowledge architecture means only you can
                decrypt and access your information, ensuring complete privacy and regulatory compliance.
              </p>
            </div>

            {/* Animated background elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
