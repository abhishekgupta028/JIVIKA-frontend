import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="mb-6">
          <Link href="/login" className="inline-flex items-center text-cyan-500 hover:text-cyan-600 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">Forgot Password?</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3">
              Send Reset Link
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link href="/login" className="text-cyan-500 hover:text-cyan-600 font-medium">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Need help?</h4>
              <p className="text-xs text-blue-600">
                If you don't receive an email within a few minutes, check your spam folder or contact our support team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}