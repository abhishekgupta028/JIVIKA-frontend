"use client"

import LocationSearch from "../../Location/location-search"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Location Search</h1>
        <div className="bg-white rounded-lg shadow-sm border">
          <LocationSearch />
        </div>
      </div>
    </div>
  )
}
