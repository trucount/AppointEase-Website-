"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="pt-20 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
                <span className="text-blue-600 font-semibold text-sm">🚀 Transform Your Business Operations</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Complete Business
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Management Suite
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Streamline appointments, manage tasks, and coordinate teams with our fully customizable business
                management platform. Starting at just <span className="font-bold text-blue-600">₹4,999</span> - own it
                forever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Start Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
              >
                <a href="https://appointeasesatvik.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 mb-16"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>No Monthly Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom Solutions</span>
              </div>
            </motion.div>
          </div>

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-2 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-600">appointease.com</div>
                </div>
                <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Dashboard Cards */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="font-bold text-lg mb-4 text-gray-900">Today's Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Team Meeting</span>
                          <span className="text-sm text-blue-600">10:00 AM</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="font-medium">Client Call</span>
                          <span className="text-sm text-green-600">2:30 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="font-medium">Project Review</span>
                          <span className="text-sm text-purple-600">4:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">24</div>
                          <div className="text-sm text-gray-600">Appointments</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">12</div>
                          <div className="text-sm text-gray-600">Tasks Done</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">8</div>
                          <div className="text-sm text-gray-600">Team Members</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">95%</div>
                          <div className="text-sm text-gray-600">Efficiency</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="font-bold text-lg mb-4 text-gray-900">Recent Activity</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">New appointment booked</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Task completed by John</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Meeting reminder sent</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Report generated</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
