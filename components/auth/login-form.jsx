"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
    remember: false,
    useOTP: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard on successful login
      router.push("/dashboard")
    }, 1500)
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-600 mt-2">Sign in to your Jivika account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-gray-700">
              Mobile Number / Email ID
            </Label>
            <Input
              id="mobile"
              type="text"
              placeholder="Mobile Number / Email ID"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              required={!formData.useOTP}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.remember}
                onCheckedChange={(checked) => setFormData({ ...formData, remember: checked })}
                className="data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Remember me for 30 days
              </Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-cyan-500 hover:text-cyan-600">
              Forgot password?
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="otp" 
              checked={formData.useOTP}
              onCheckedChange={(checked) => setFormData({ ...formData, useOTP: checked })}
              className="data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" 
            />
            <Label htmlFor="otp" className="text-sm text-gray-600">
              Login with OTP instead of password
            </Label>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg font-medium disabled:bg-gray-400"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              formData.useOTP ? "Send OTP" : "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
