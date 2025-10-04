"use client"
import Link from "next/link"
import { Search, MapPin, Star, Calendar, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function FindDoctorsContent() {
  const router = useRouter()
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [isLoadingSpecialty, setIsLoadingSpecialty] = useState(false)
  
  // Get specialty from URL immediately on client-side
  const getInitialSpecialty = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const specialty = urlParams.get('specialty')
      return specialty ? decodeURIComponent(specialty) : ""
    }
    return ""
  }
  
  // Initialize specialty from URL and handle navigation changes
  useEffect(() => {
    // Set initial specialty from URL
    const initialSpecialty = getInitialSpecialty()
    setSelectedSpecialty(initialSpecialty)
    
    // Handle back/forward navigation
    const handlePopState = () => {
      const newSpecialty = getInitialSpecialty()
      setSelectedSpecialty(newSpecialty)
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleSpecialtyClick = (specialty) => {
    // Show loading only when clicking on a specialty
    setIsLoadingSpecialty(true)
    
    // Small delay to show loading state for specialty filtering
    setTimeout(() => {
      setSelectedSpecialty(specialty)
      setIsLoadingSpecialty(false)
      // Encode the specialty name for URL
      const encodedSpecialty = encodeURIComponent(specialty)
      router.push(`/find-doctors?specialty=${encodedSpecialty}`)
    }, 300)
  }

  // Show loading only when processing specialty click
  if (isLoadingSpecialty) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading specialty doctors...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Find Doctors Near You
            {selectedSpecialty && (
              <span className="text-lg font-normal text-cyan-600 ml-2">
                - {selectedSpecialty.charAt(0).toUpperCase() + selectedSpecialty.slice(1)}
              </span>
            )}
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder={selectedSpecialty ? `Search ${selectedSpecialty} doctors...` : "Search doctors, specialties, conditions..."}
                  defaultValue={selectedSpecialty}
                  className="pl-10 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-10 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
              Search
            </Button>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Popular Specialties</h2>
            {selectedSpecialty && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedSpecialty("")
                  router.push("/find-doctors")
                }}
                className="text-cyan-600 border-cyan-600 hover:bg-cyan-50"
              >
                Show All Doctors
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "General Physician", icon: "👨‍⚕️" },
              { name: "Dermatologist", icon: "🩺" },
              { name: "Gynecologist", icon: "👩‍⚕️" },
              { name: "Pediatrician", icon: "👶" },
              { name: "Cardiologist", icon: "❤️" },
              { name: "Psychiatrist", icon: "🧠" },
              { name: "Orthopedist", icon: "🦴" },
              { name: "ENT Specialist", icon: "👂" },
              { name: "Dentist", icon: "🦷" },
              { name: "Ophthalmologist", icon: "👁️" },
              { name: "Neurologist", icon: "🧠" },
              { name: "Urologist", icon: "🩺" }
            ].map((specialty) => (
              <Card 
                key={specialty.name} 
                className={`hover:shadow-md transition-all cursor-pointer border-2 ${
                  selectedSpecialty === specialty.name 
                    ? 'bg-cyan-100 border-cyan-500 shadow-md' 
                    : 'hover:bg-cyan-50 hover:border-cyan-200'
                }`}
                onClick={() => handleSpecialtyClick(specialty.name)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{specialty.icon}</div>
                  <p className={`text-sm font-medium ${
                    selectedSpecialty === specialty.name ? 'text-cyan-700' : 'text-gray-700'
                  }`}>
                    {specialty.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Doctors */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {selectedSpecialty ? `${selectedSpecialty} Doctors` : 'Featured Doctors'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const allDoctors = [
                {
                  name: "Dr. Sarah Johnson",
                  specialty: "Cardiologist",
                  experience: "15 years",
                  rating: 4.8,
                  reviews: 324,
                  fee: 500,
                  location: "Mumbai",
                  available: true
                },
                {
                  name: "Dr. Raj Patel",
                  specialty: "Dermatologist", 
                  experience: "12 years",
                  rating: 4.7,
                  reviews: 256,
                  fee: 400,
                  location: "Delhi",
                  available: false
                },
                {
                  name: "Dr. Priya Sharma",
                  specialty: "Pediatrician",
                  experience: "18 years",
                  rating: 4.9,
                  reviews: 412,
                  fee: 350,
                  location: "Bangalore",
                  available: true
                },
                {
                  name: "Dr. Anil Kumar",
                  specialty: "General Physician",
                  experience: "20 years",
                  rating: 4.6,
                  reviews: 189,
                  fee: 300,
                  location: "Chennai",
                  available: true
                },
                {
                  name: "Dr. Meera Singh",
                  specialty: "Gynecologist",
                  experience: "14 years",
                  rating: 4.8,
                  reviews: 298,
                  fee: 450,
                  location: "Pune",
                  available: true
                },
                {
                  name: "Dr. Rohit Gupta",
                  specialty: "Psychiatrist",
                  experience: "16 years",
                  rating: 4.7,
                  reviews: 234,
                  fee: 600,
                  location: "Hyderabad",
                  available: false
                }
              ];

              const filteredDoctors = allDoctors.filter(doctor => 
                !selectedSpecialty || doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
              );

              if (filteredDoctors.length === 0) {
                return (
                  <div className="col-span-full text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No {selectedSpecialty} doctors found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any {selectedSpecialty} doctors in your area right now.
                    </p>
                    <Button 
                      onClick={() => {
                        setSelectedSpecialty("")
                        router.push("/find-doctors")
                      }}
                      className="bg-cyan-500 hover:bg-cyan-600"
                    >
                      View All Doctors
                    </Button>
                  </div>
                );
              }

              return filteredDoctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        👨‍⚕️
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                      </div>
                    </div>
                    {doctor.available && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Available
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-xs text-gray-500">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{doctor.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold text-gray-800">₹{doctor.fee}</span>
                      <span className="text-sm text-gray-500 ml-1">consultation</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        Book
                      </Button>
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ));
          })()}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-cyan-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Can't find the right doctor?</h2>
          <p className="text-cyan-50 mb-6">
            Get personalized recommendations from our healthcare experts
          </p>
          <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
            <Link href="/register">Get Help Finding a Doctor</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

export default function FindDoctorsPage() {
  return <FindDoctorsContent />
}