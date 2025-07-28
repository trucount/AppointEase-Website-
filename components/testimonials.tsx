"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Dr. Vijay Kumar Sharma",
      position: "Chief Medical Officer",
      company: "Sharma Medical Center",
      image: "/placeholder.svg?height=80&width=80&text=Dr.VKS",
      rating: 5,
      text: "AppointEase has revolutionized our patient management system. The seamless appointment scheduling and integrated medical records have improved our efficiency by 40%. Our patients love the automated reminders and easy booking process.",
      industry: "Healthcare",
      companyLogo: "/placeholder.svg?height=40&width=120&text=Sharma+Medical",
    },
    {
      name: "Sarah Johnson",
      position: "Principal",
      company: "Cambridge Court High School",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      rating: 5,
      text: "Managing faculty meetings, parent-teacher conferences, and student appointments was chaotic before AppointEase. Now everything runs smoothly with automated scheduling and notifications. It's been a game-changer for our administrative efficiency.",
      industry: "Education",
      companyLogo: "/placeholder.svg?height=40&width=120&text=Cambridge+Court",
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "Vormique Solutions",
      image: "/placeholder.svg?height=80&width=80&text=MC",
      rating: 5,
      text: "The customization capabilities of AppointEase are outstanding. We were able to tailor it perfectly to our consulting workflow. The team collaboration features and client portal have significantly improved our project management and client satisfaction.",
      industry: "Consulting",
      companyLogo: "/placeholder.svg?height=40&width=120&text=Vormique",
    },
    {
      name: "Rajesh Patel",
      position: "CEO",
      company: "TruCount Enterprises",
      image: "/placeholder.svg?height=80&width=80&text=RP",
      rating: 5,
      text: "As a growing enterprise, we needed a scalable solution that could handle our complex scheduling needs. AppointEase delivered beyond expectations with its robust features, excellent security, and outstanding customer support. Highly recommended!",
      industry: "Enterprise",
      companyLogo: "/placeholder.svg?height=40&width=120&text=TruCount",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations worldwide are transforming their operations with AppointEase
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-2xl bg-white">
                <CardContent className="p-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                        />
                        <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-2">
                          <Quote className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <div className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</div>
                          <div className="text-blue-600 font-semibold">{testimonials[currentIndex].position}</div>
                          <div className="text-gray-600">{testimonials[currentIndex].company}</div>
                        </div>

                        <div className="mt-4 lg:mt-0">
                          <img
                            src={testimonials[currentIndex].companyLogo || "/placeholder.svg"}
                            alt={`${testimonials[currentIndex].company} logo`}
                            className="h-8 opacity-60"
                          />
                          <div className="text-sm text-gray-500 mt-1">{testimonials[currentIndex].industry}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-gray-600 mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                src={testimonial.companyLogo}
                alt={`${testimonial.company} logo`}
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
