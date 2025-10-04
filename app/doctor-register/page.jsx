import Image from "next/image"
import DoctorRegisterForm from "@/components/auth/doctor-register"

export default function DoctorRegisterPage() {
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

          <div className="flex justify-center">
            <DoctorRegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
