"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, GraduationCap, Heart, Store, Users, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient scheduling, medical records, staff coordination, and compliance management.",
      features: ["Patient Management", "Medical Records", "Staff Scheduling", "HIPAA Compliance"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Student appointments, faculty meetings, resource booking, and administrative workflows.",
      features: ["Student Portal", "Faculty Management", "Resource Booking", "Academic Calendar"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Meeting rooms, project management, team coordination, and client relationship management.",
      features: ["Meeting Rooms", "Project Tracking", "Team Coordination", "Client Management"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Store,
      title: "Retail",
      description: "Customer appointments, inventory management, staff scheduling, and sales tracking.",
      features: ["Customer Booking", "Inventory Control", "Staff Management", "Sales Analytics"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Client meetings, project timelines, resource allocation, and billing management.",
      features: ["Client Portal", "Project Timelines", "Resource Planning", "Billing System"],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Service booking, client management, workflow automation, and performance tracking.",
      features: ["Service Booking", "Client Database", "Workflow Automation", "Performance Metrics"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Across{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare to education, our platform adapts to meet the unique needs of every industry with
            specialized features and workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div
                          className={`w-2 h-2 rounded-full ${industry.iconColor.replace("text-", "bg-")} mr-2`}
                        ></div>
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
