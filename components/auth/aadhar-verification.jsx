"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

export default function AadharVerification({ userType = "patient" }) {
  const [aadharNumber, setAadharNumber] = useState("")
  const [aadharImage, setAadharImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setAadharImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleVerification = async () => {
    setIsVerifying(true)
    setTimeout(() => {
      setVerificationStatus("success")
      setIsVerifying(false)
    }, 3000)
  }

  const formatAadharNumber = (value) => {
    const digits = value.replace(/\D/g, "")
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    return formatted.slice(0, 14)
  }

  const handleAadharChange = (e) => {
    const formatted = formatAadharNumber(e.target.value)
    setAadharNumber(formatted)
  }

  if (verificationStatus === "success") {
    return (
      <div className="max-w-md mx-auto">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Aadhar Verified Successfully!</h3>
              <p className="text-green-600 mb-6">Your identity has been verified. You can now access all features.</p>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Continue to Dashboard</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold text-gray-800">Verify Your Identity</CardTitle>
          <CardDescription>
            {userType === "doctor"
              ? "Complete your doctor profile with Aadhar verification"
              : "Secure your account with Aadhar verification"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="w-12 h-1 bg-green-500"></div>
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <div className="w-12 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">3</span>
            </div>
          </div>

          {/* Aadhar Number Input */}
          <div className="space-y-2">
            <Label htmlFor="aadharNumber" className="text-gray-700">
              Aadhar Number
            </Label>
            <Input
              id="aadharNumber"
              type="text"
              placeholder="1234 5678 9012"
              value={aadharNumber}
              onChange={handleAadharChange}
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 text-center tracking-wider"
              maxLength={14}
            />
            <p className="text-xs text-gray-500">Enter your 12-digit Aadhar number</p>
          </div>

          {/* Aadhar Image Upload */}
          <div className="space-y-2">
            <Label className="text-gray-700">Upload Aadhar Card Image</Label>

            {!imagePreview ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-cyan-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="aadhar-upload"
                />
                <label htmlFor="aadhar-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload Aadhar card image</p>
                  <p className="text-xs text-gray-500">Supports: JPG, PNG, PDF (Max 5MB)</p>
                </label>
              </div>
            ) : (
              <div className="relative">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-cyan-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700">{aadharImage?.name || "Aadhar Card"}</p>
                      <p className="text-xs text-gray-500">
                        {aadharImage?.size ? `${(aadharImage.size / 1024 / 1024).toFixed(2)} MB` : "Image uploaded"}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setAadharImage(null)
                        setImagePreview(null)
                      }}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">Your data is secure</h4>
                <p className="text-xs text-blue-600 mt-1">
                  We use bank-level encryption to protect your Aadhar information. Your data will only be used for
                  identity verification.
                </p>
              </div>
            </div>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerification}
            disabled={!aadharNumber || !aadharImage || aadharNumber.length !== 14 || isVerifying}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-300"
          >
            {isVerifying ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Verifying...</span>
              </div>
            ) : (
              "Verify Aadhar"
            )}
          </Button>

          {/* Skip Option */}
          <div className="text-center">
            <button className="text-sm text-gray-500 hover:text-gray-700">Skip for now (You can verify later)</button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
