import Link from "next/link"
import { Shield, HelpCircle, Phone, Mail, FileText, Lock, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SecurityHelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Security & Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and security are our top priorities. Find answers to common questions and learn how we protect your data.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Security</h3>
              <p className="text-gray-600 text-sm mb-4">Learn how we protect your personal and medical information</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm mb-4">Find answers to frequently asked questions</p>
              <Button variant="outline" size="sm">View FAQ</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm mb-4">Get help from our customer support team</p>
              <Button variant="outline" size="sm">Contact Us</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Policies</h3>
              <p className="text-gray-600 text-sm mb-4">Review our terms, privacy policy, and guidelines</p>
              <Button variant="outline" size="sm">View Policies</Button>
            </CardContent>
          </Card>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Shield className="w-6 h-6 text-cyan-500 mr-2" />
            How We Keep You Safe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">End-to-End Encryption</h3>
                <p className="text-gray-600 text-sm">All your medical data is encrypted using industry-standard protocols</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">HIPAA Compliant</h3>
                <p className="text-gray-600 text-sm">We follow strict healthcare privacy regulations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Verified Doctors</h3>
                <p className="text-gray-600 text-sm">All doctors are verified and licensed professionals</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Payment information is processed through secure gateways</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">24/7 Monitoring</h3>
                <p className="text-gray-600 text-sm">Our systems are monitored around the clock for security</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Data Backup</h3>
                <p className="text-gray-600 text-sm">Your information is safely backed up across multiple servers</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <HelpCircle className="w-6 h-6 text-cyan-500 mr-2" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How secure is my medical information?</AccordionTrigger>
              <AccordionContent>
                Your medical information is protected using bank-level encryption and stored on HIPAA-compliant servers. 
                We never share your personal health information without your explicit consent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
              <AccordionContent>
                You can book an appointment by browsing our list of doctors, selecting your preferred specialist, 
                and choosing an available time slot. You'll receive a confirmation via email and SMS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if I need to cancel my appointment?</AccordionTrigger>
              <AccordionContent>
                You can cancel your appointment up to 2 hours before the scheduled time through your dashboard 
                or by calling our support team. Cancellations made with sufficient notice are fully refundable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does video consultation work?</AccordionTrigger>
              <AccordionContent>
                Video consultations are conducted through our secure platform. You'll receive a link before your 
                appointment time. Make sure you have a stable internet connection and a device with camera and microphone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are the doctors on Jivika verified?</AccordionTrigger>
              <AccordionContent>
                Yes, all doctors on our platform are verified medical professionals with valid licenses. 
                We conduct thorough background checks and verify their credentials before onboarding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3">
              <Link href="tel:+91-80-1234-5678">
                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 py-3">
              <Link href="mailto:support@jivika.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}