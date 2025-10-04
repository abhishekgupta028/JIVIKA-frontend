import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-cyan-400">
                <span className="text-white">•</span>jivika<span className="text-cyan-400">•</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted healthcare companion. Connecting patients with qualified doctors for better health outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Patients */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/find-doctors" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/video-consult" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Video Consultation
                </Link>
              </li>
              <li>
                <Link href="/surgeries" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Surgeries
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Health Records
                </Link>
              </li>
            </ul>
          </div>

          {/* For Doctors */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Doctors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doctor-register" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold bg-cyan-900 bg-opacity-50 px-3 py-2 rounded-md block">
                  🩺 Join as Doctor
                </Link>
              </li>
              <li>
                <Link href="/doctor-register" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Doctor Portal
                </Link>
              </li>
              <li>
                <Link href="/doctor-register" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Manage Appointments
                </Link>
              </li>
              <li>
                <Link href="/doctor-register" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Practice Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+91-80-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">support@jivika.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Healthcare Street,<br />
                  Bangalore, Karnataka 560001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-cyan-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
              <p className="text-cyan-100">Join thousands of patients and doctors on our platform</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                <Link href="/register">Register as Patient</Link>
              </Button>
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 font-semibold border-2 border-orange-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Link href="/doctor-register">🩺 Join as Doctor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-2 md:mb-0">
              © 2025 Jivika Healthcare. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}