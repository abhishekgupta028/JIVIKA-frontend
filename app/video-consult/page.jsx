import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Phone, Filter } from "lucide-react"
import Image from "next/image"

export default function VideoConsultPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with filters */}
      <div className="bg-indigo-600 px-4 py-4">
        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <Select>
            <SelectTrigger className="w-32 bg-indigo-500 border-indigo-400 text-white">
              <SelectValue placeholder="Gender" />
              <ChevronDown className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-40 bg-indigo-500 border-indigo-400 text-white">
              <SelectValue placeholder="Patient Stories" />
              <ChevronDown className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stories</SelectItem>
              <SelectItem value="high">High Rated</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32 bg-indigo-500 border-indigo-400 text-white">
              <SelectValue placeholder="Experience" />
              <ChevronDown className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
              <SelectItem value="20+">20+ years</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32 bg-indigo-500 border-indigo-400 text-white">
              <SelectValue placeholder="All Filters" />
              <ChevronDown className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Filters</SelectItem>
              <SelectItem value="availability">Availability</SelectItem>
              <SelectItem value="fees">Fees</SelectItem>
            </SelectContent>
          </Select>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-white text-sm">Sort By</span>
            <Select>
              <SelectTrigger className="w-32 bg-indigo-500 border-indigo-400 text-white">
                <SelectValue placeholder="Relevance" />
                <ChevronDown className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="experience">Experience</SelectItem>
                <SelectItem value="fees">Fees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="max-w-6xl mx-auto p-4 space-y-4">
        {/* Dr. Sumanth Shetty */}
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Dr. Sumanth Shetty"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white border border-gray-200 rounded px-2 py-1 text-xs">
                    <span className="text-blue-500 font-semibold">practo</span>
                    <div className="text-blue-400 text-[10px]">DENTAL</div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-blue-400 mb-1">Dr. Sumanth Shetty</h3>
                    <p className="text-gray-600 mb-1">Dentist</p>
                    <p className="text-gray-500 text-sm mb-2">26 years experience overall</p>

                    <div className="mb-2">
                      <p className="text-gray-700 font-medium">Koramangala,Bangalore • Chisel Dental</p>
                      <p className="text-gray-600 text-sm">₹300 Consultation fee at clinic</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500 hover:bg-green-500 text-white px-2 py-1">👍 96%</Badge>
                        <span className="text-gray-600 font-medium">4639 Patient Stories</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">Available Today</span>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">
                        Book Clinic Visit
                        <div className="text-xs">No Booking Fee</div>
                      </Button>
                      <Button variant="outline" className="w-full border-blue-400 text-blue-500 hover:bg-blue-50">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Clinic
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dr. Venkatesh M J */}
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Dr. Venkatesh M J"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white border border-gray-200 rounded px-2 py-1 text-xs">
                    <span className="text-blue-500 font-semibold">practo</span>
                    <div className="text-blue-400 text-[10px]">DENTAL</div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-blue-400 mb-1">Dr. Venkatesh M J</h3>
                    <p className="text-gray-600 mb-1">Dentist</p>
                    <p className="text-gray-500 text-sm mb-2">30 years experience overall</p>

                    <div className="mb-2">
                      <p className="text-gray-700 font-medium">
                        Indiranagar,Bangalore • All Care Dental Centre - since 1969 + 1 more
                      </p>
                      <p className="text-gray-600 text-sm">₹300 Consultation fee at clinic</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500 hover:bg-green-500 text-white px-2 py-1">👍 87%</Badge>
                        <span className="text-gray-600 font-medium underline cursor-pointer">52 Patient Stories</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">Available Today</span>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">
                        Book Clinic Visit
                        <div className="text-xs">No Booking Fee</div>
                      </Button>
                      <Button variant="outline" className="w-full border-blue-400 text-blue-500 hover:bg-blue-50">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Clinic
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* View Profile Link */}
        <div className="text-left">
          <Button variant="link" className="text-blue-400 p-0 h-auto font-normal">
            View Profile
          </Button>
        </div>

        {/* Show doctors near me */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-center gap-2 text-blue-500">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Show doctors near me</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
