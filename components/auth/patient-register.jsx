"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import AadharVerification from "./aadhar-verification"

export default function PatientRegisterForm() {
  const [currentStep, setCurrentStep] = useState("register")
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    password: "",
    countryCode: "+91",
  })

  const handleInitialSubmit = (e) => {
    e.preventDefault()
    setCurrentStep("aadhar")
  }

  if (currentStep === "aadhar") {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Almost Done!</h2>
          <p className="text-gray-600">Complete your verification to secure your account</p>
        </div>
        <AadharVerification userType="patient" />
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-700">Join Jivika</h2>
          <div className="text-sm text-gray-600">
            Are you a doctor?{" "}
            <Link href="/doctor-register" className="text-orange-500 hover:text-orange-600">
              Register Here
            </Link>
          </div>
        </div>

        <form onSubmit={handleInitialSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-700">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobileNumber" className="text-gray-700">
              Mobile Number
            </Label>
            <div className="flex space-x-2">
              <Select
                value={formData.countryCode}
                onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
              >
                <SelectTrigger className="w-24 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91(IND)</SelectItem>
                  <SelectItem value="+1">+1(US)</SelectItem>
                  <SelectItem value="+44">+44(UK)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="mobileNumber"
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="flex-1 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="createPassword" className="text-gray-700">
              Create Password
            </Label>
            <Input
              id="createPassword"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="offers"
              className="data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 mt-1"
            />
            <Label htmlFor="offers" className="text-sm text-gray-600 leading-relaxed">
              Receive relevant offers and promotional communication from Jivika
            </Label>
          </div>

          <div className="text-xs text-gray-500">
            By signing up, I agree to{" "}
            <Link href="/terms" className="text-cyan-500 hover:text-cyan-600">
              terms
            </Link>
          </div>

          <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg font-medium">
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  )
}
