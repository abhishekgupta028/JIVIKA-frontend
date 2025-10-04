import Link from "next/link"
import { CheckCircle, Calendar, Video, Search, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome to Jivika!</h1>
              <p className="text-gray-600">You have successfully logged in. Here's what you can do:</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/find-doctors" className="block">
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Doctors</h3>
                <p className="text-gray-600 text-sm">Search and book appointments with qualified doctors</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/video-consult" className="block">
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Video Consult</h3>
                <p className="text-gray-600 text-sm">Instant video consultation with doctors</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">My Appointments</h3>
              <p className="text-gray-600 text-sm">View and manage your appointments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Health Records</h3>
              <p className="text-gray-600 text-sm">Access your medical history and reports</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Health Journey</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800">Account Created Successfully</p>
                  <p className="text-sm text-gray-600">Welcome to Jivika healthcare platform</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">Just now</span>
            </div>
            
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Start your health journey by booking your first consultation</p>
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/find-doctors">Book Your First Appointment</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">Health Tip of the Day</h2>
          <p className="text-cyan-50 mb-4">
            Regular health checkups are essential for early detection and prevention of diseases. 
            Schedule a preventive health checkup with our qualified doctors today.
          </p>
          <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100">
            <Link href="/find-doctors?specialty=general-physician">Book Health Checkup</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}