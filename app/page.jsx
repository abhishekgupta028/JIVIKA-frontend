import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"

export default function JivikaHomepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-12">
          <div className="flex max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center px-4 py-3 border-r border-gray-200 bg-gray-50">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <Link href="/location" className="text-gray-700">
                  Bangalore
                </Link>
              </div>
            <div className="flex-1 flex items-center">
              <Search className="w-5 h-5 text-gray-400 ml-4 mr-2" />
              <Input
                type="text"
                placeholder="Search doctors, clinics, hospitals, etc."
                className="border-0 focus:ring-0 text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Instant Video Consultation */}
          <Link href="/video-consult" className="block">
            <div className="bg-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto bg-blue-200 rounded-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-8 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Instant Video Consultation</h3>
              <p className="text-gray-600 text-sm">Connect within 60 secs</p>
            </div>
          </Link>

          {/* Find Doctors Near You */}
          <Link href="/find-doctors" className="block">
            <div className="bg-teal-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto bg-teal-200 rounded-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-teal-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Doctors Near You</h3>
              <p className="text-gray-600 text-sm">Confirmed appointments</p>
            </div>
          </Link>

          {/* Surgeries */}
          <Link href="/surgeries" className="block">
            <div className="bg-purple-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto bg-purple-200 rounded-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-purple-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Surgeries</h3>
              <p className="text-gray-600 text-sm">Safe and trusted surgery centers</p>
            </div>
          </Link>
        </div>

        {/* Consult Doctors Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Consult top doctors online for any health concern
              </h2>
              <p className="text-gray-600">Private online consultations with verified doctors in all specialists</p>
            </div>
            <Button asChild variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-50">
              <Link href="/find-doctors">View All Specialities</Link>
            </Button>
          </div>

          {/* Specialties Icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {/* General Physician */}
            <Link href="/find-doctors?specialty=General Physician" className="text-center cursor-pointer hover:scale-105 transition-transform block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">General Physician</p>
            </Link>

            {/* Dermatologist */}
            <Link href="/find-doctors?specialty=Dermatologist" className="text-center cursor-pointer hover:scale-105 transition-transform block">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Dermatologist</p>
            </Link>

            {/* Gynecologist */}
            <Link href="/find-doctors?specialty=Gynecologist" className="text-center cursor-pointer hover:scale-105 transition-transform block">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Gynecologist</p>
            </Link>

            {/* Pediatrician */}
            <Link href="/find-doctors?specialty=Pediatrician" className="text-center cursor-pointer hover:scale-105 transition-transform block">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-3a2 2 0 114 0v3H8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Pediatrician</p>
            </Link>

            {/* Cardiologist */}
            <Link href="/find-doctors?specialty=Cardiologist" className="text-center cursor-pointer hover:scale-105 transition-transform block">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Cardiologist</p>
            </Link>

            {/* Psychiatrist */}
            <Link href="/find-doctors?specialty=Psychiatrist" className="text-center cursor-pointer hover:scale-105 transition-transform block">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Psychiatrist</p>
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-cyan-500 rounded-2xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your healthcare?</h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-3xl mx-auto">
            Join thousands of patients and doctors on Jivika's healthcare platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
              <Link href="/register">Register as Patient</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Link href="/doctor-register">🩺 Join as Doctor</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
