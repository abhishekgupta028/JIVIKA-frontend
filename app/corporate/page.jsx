import Link from "next/link"
import { Building2, Users, Briefcase, Shield, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">NEW</span>
            For Corporates
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Corporate Healthcare Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare programs designed to keep your workforce healthy, productive, and engaged.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Employee Wellness</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive health programs to improve employee wellbeing and reduce absenteeism
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Productivity Boost</h3>
              <p className="text-gray-600 text-sm">
                Healthy employees are 31% more productive and take 66% fewer sick days
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cost Effective</h3>
              <p className="text-gray-600 text-sm">
                Reduce healthcare costs by up to 40% with preventive care and early intervention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Corporate Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">On-site Health Camps</h3>
                  <p className="text-gray-600 text-sm">Regular health checkups and screenings at your workplace</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telemedicine Access</h3>
                  <p className="text-gray-600 text-sm">24/7 virtual consultations for all employees</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Mental Health Support</h3>
                  <p className="text-gray-600 text-sm">Counseling and stress management programs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Vaccination Programs</h3>
                  <p className="text-gray-600 text-sm">Seasonal flu shots and other preventive vaccinations</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Health Analytics</h3>
                  <p className="text-gray-600 text-sm">Detailed reports and insights on workforce health trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Emergency Medical Support</h3>
                  <p className="text-gray-600 text-sm">24/7 emergency response and first aid training</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Wellness Workshops</h3>
                  <p className="text-gray-600 text-sm">Educational sessions on nutrition, fitness, and health</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Customized Plans</h3>
                  <p className="text-gray-600 text-sm">Tailored healthcare solutions based on your company needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-gray-800">₹299<span className="text-sm font-normal text-gray-500">/employee/month</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Basic health checkups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Telemedicine access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Health analytics dashboard</span>
                </div>
                <Button className="w-full mt-4 bg-gray-600 hover:bg-gray-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative border-cyan-500 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Professional</CardTitle>
                <div className="text-3xl font-bold text-gray-800">₹599<span className="text-sm font-normal text-gray-500">/employee/month</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Everything in Starter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">On-site health camps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Mental health support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Emergency medical support</span>
                </div>
                <Button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-gray-800">Custom<span className="text-sm font-normal text-gray-500"> pricing</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Everything in Professional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Custom integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Priority support</span>
                </div>
                <Button className="w-full mt-4 bg-gray-600 hover:bg-gray-700">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Workplace Health?</h2>
          <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
            Join over 500+ companies that trust Jivika for their employee healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/register">Start Free Trial</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3">
              <Link href="tel:+91-80-1234-5678">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}