import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "@/components/auth/login-form"
import PatientRegisterForm from "@/components/auth/patient-register"

export default function LoginPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Medical illustration with healthcare icons and globe"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:bg-transparent rounded-none"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:bg-transparent rounded-none"
                >
                  Register
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm />
              </TabsContent>

              <TabsContent value="register">
                <PatientRegisterForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
