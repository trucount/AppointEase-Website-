"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, BarChart3, Settings, Shield, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const modules = [
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Smart scheduling with calendar integration, automated reminders, and Google Meet support.",
      features: ["Calendar Integration", "Automated Reminders", "Google Meet", "Recurring Appointments"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign tasks, track progress, and manage team workflows with role-based access controls.",
      features: ["Task Assignment", "Progress Tracking", "Role Management", "Team Chat"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive insights into your business performance with exportable reports.",
      features: ["Performance Metrics", "Custom Reports", "Data Export", "Real-time Analytics"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailor the platform to your business needs with custom modules and branding.",
      features: ["Custom Modules", "Brand Customization", "Workflow Builder", "API Integration"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with end-to-end encryption and compliance features.",
      features: ["AES Encryption", "Data Privacy", "Compliance Ready", "Secure Backup"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Access your business management tools from any device, anywhere, anytime.",
      features: ["Web Application", "Mobile Apps", "Desktop Apps", "Offline Mode"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Business{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of tools designed to streamline your operations and boost productivity across your
            entire organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${module.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <module.icon className={`h-8 w-8 ${module.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>

                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${module.iconColor.replace("text-", "bg-")} mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
