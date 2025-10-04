import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-cyan-500">
              <span className="text-gray-800">•</span>jivika<span className="text-cyan-500">•</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/find-doctors" className="text-gray-700 hover:text-gray-900 font-medium">
              Find Doctors
            </Link>
            <Link href="/video-consult" className="text-gray-700 hover:text-gray-900 font-medium">
              Video Consult
            </Link>
            <Link href="/surgeries" className="text-gray-700 hover:text-gray-900 font-medium">
              Surgeries
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/corporate" className="flex items-center space-x-1 hover:text-gray-900">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">NEW</span>
            <span className="text-gray-700">For Corporates</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </Link>
          <Link href="/doctor-register" className="flex items-center space-x-1 hover:text-gray-900 bg-cyan-50 px-3 py-2 rounded-md border border-cyan-200">
            <span className="text-cyan-700 font-medium">🩺 For Providers</span>
            <ChevronDown className="w-4 h-4 text-cyan-500" />
          </Link>
          <Link href="/security-help" className="flex items-center space-x-1 hover:text-gray-900">
            <span className="text-gray-700">Security & help</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-500 hover:text-gray-700">
              Login / Signup
            </Link>
            <Link href="/dashboard" className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
