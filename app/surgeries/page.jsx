import Link from "next/link"
import { Stethoscope, Shield, Clock, Award, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SurgeriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 mb-12 text-center shadow-sm border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Safe & Trusted Surgery Centers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access world-class surgical facilities with experienced surgeons and modern equipment. 
            Your safety and comfort are our top priorities.
          </p>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
            <Link href="/register">Book Consultation</Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">
                All procedures follow strict safety protocols and international standards
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Surgeons</h3>
              <p className="text-gray-600 text-sm">
                Highly qualified and experienced surgeons with proven track records
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Recovery</h3>
              <p className="text-gray-600 text-sm">
                Advanced surgical techniques for faster healing and minimal downtime
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete Care</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive pre and post-operative care and support
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Popular Surgeries */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Popular Surgeries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Cataract Surgery",
                description: "Advanced lens replacement for clear vision",
                duration: "30-45 mins",
                recovery: "1-2 weeks",
                price: "₹25,000 - ₹50,000"
              },
              {
                name: "Gallstone Surgery",
                description: "Minimally invasive laparoscopic procedure",
                duration: "45-60 mins", 
                recovery: "2-3 weeks",
                price: "₹40,000 - ₹80,000"
              },
              {
                name: "Hernia Repair",
                description: "Modern mesh repair techniques",
                duration: "30-90 mins",
                recovery: "2-4 weeks", 
                price: "₹35,000 - ₹70,000"
              },
              {
                name: "Appendectomy",
                description: "Safe appendix removal surgery",
                duration: "30-60 mins",
                recovery: "1-3 weeks",
                price: "₹30,000 - ₹60,000"
              },
              {
                name: "Knee Replacement",
                description: "Joint replacement for better mobility",
                duration: "1-2 hours",
                recovery: "6-12 weeks",
                price: "₹1,50,000 - ₹3,00,000"
              },
              {
                name: "Cardiac Surgery",
                description: "Advanced heart procedures",
                duration: "3-6 hours",
                recovery: "4-8 weeks",
                price: "₹2,00,000 - ₹8,00,000"
              }
            ].map((surgery, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{surgery.name}</h3>
                        <p className="text-sm text-gray-600">{surgery.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-700">{surgery.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Recovery:</span>
                      <span className="text-gray-700">{surgery.recovery}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price Range:</span>
                      <span className="font-semibold text-gray-800">{surgery.price}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Surgery Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Meet with specialist surgeon for evaluation"
              },
              {
                step: "2", 
                title: "Planning",
                description: "Detailed surgical plan and pre-op preparation"
              },
              {
                step: "3",
                title: "Surgery",
                description: "Safe procedure in state-of-the-art facility"
              },
              {
                step: "4",
                title: "Recovery",
                description: "Comprehensive post-operative care and follow-up"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Jivika for Surgery?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              "10,000+ Successful Surgeries",
              "99.8% Success Rate",
              "24/7 Medical Support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="/register">Book Free Consultation</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}