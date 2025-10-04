import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatientRegisterForm from "@/components/auth/patient-register"
import DoctorRegisterForm from "@/components/auth/doctor-register"

export default function RegisterPage() {
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
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="patient"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:bg-transparent rounded-none"
                >
                  Patient
                </TabsTrigger>
                <TabsTrigger
                  value="doctor"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:bg-transparent rounded-none"
                >
                  Doctor
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient">
                <PatientRegisterForm />
              </TabsContent>

              <TabsContent value="doctor">
                <DoctorRegisterForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
