import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-cyan-500 hover:text-cyan-600 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Terms & Conditions</h1>
            <p className="text-gray-600 mt-2">Last updated: October 4, 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Jivika healthcare platform, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">2. Use License</h2>
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the materials on Jivika's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">3. Medical Disclaimer</h2>
              <p className="text-gray-600">
                The information provided on Jivika is for educational and informational purposes only. 
                It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">4. Privacy Policy</h2>
              <p className="text-gray-600">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                your information when you use our service. By using our service, you agree to the collection 
                and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">5. User Accounts</h2>
              <p className="text-gray-600">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for safeguarding the password and for maintaining 
                the confidentiality of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">6. Prohibited Uses</h2>
              <p className="text-gray-600">You may not use our service:</p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">7. Service Availability</h2>
              <p className="text-gray-600">
                We reserve the right to withdraw or amend our service, and any service or material we provide 
                on the website, in our sole discretion without notice. We will not be liable if for any reason 
                all or any part of the website is unavailable at any time or for any period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                In no event shall Jivika or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or 
                inability to use the materials on Jivika's website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days' notice prior to any new 
                terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800">10. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  Email: legal@jivika.com<br />
                  Phone: +91-80-1234-5678<br />
                  Address: Jivika Healthcare Pvt Ltd, Bangalore, India
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              By continuing to use Jivika, you acknowledge that you have read and understood these terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}