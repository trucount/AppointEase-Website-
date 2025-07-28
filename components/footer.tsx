"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Image src="/logo.png" alt="AppointEase Logo" width={50} height={50} className="rounded-xl shadow-lg" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AppointEase
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-md leading-relaxed"
            >
              Complete business management solution for appointments, meetings, and task tracking. Customizable, secure,
              and owned for life.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>appointease.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+91 8852099490</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>Worldwide</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/20 mt-6"
            >
              <p className="text-blue-300 font-semibold">Starting at ₹4,999</p>
              <p className="text-gray-400 text-sm">One-time purchase • No subscriptions • Own forever</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">Products</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Appointment Management",
                "Team Collaboration",
                "Analytics & Reports",
                "Security & Privacy",
                "Cross-Platform Access",
                "Custom Solutions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { label: "Live Demo", href: "https://appointeasesatvik.vercel.app/", external: true },
                { label: "Products", action: () => scrollToSection("products") },
                { label: "Industries", action: () => scrollToSection("industries") },
                { label: "Pricing", action: () => scrollToSection("pricing") },
                { label: "Security", action: () => scrollToSection("security") },
                { label: "Contact", action: () => scrollToSection("contact") },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="cursor-pointer transition-colors"
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button onClick={item.action} className="hover:text-blue-400 transition-colors">
                      {item.label}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400 mb-2">&copy; 2024 AppointEase. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            Built for businesses that value ownership, security, and customization.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
