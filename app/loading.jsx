export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-2xl font-bold text-cyan-500 mb-2">
          <span className="text-gray-800">•</span>jivika<span className="text-cyan-500">•</span>
        </div>
        <p className="text-gray-600">Loading your healthcare experience...</p>
      </div>
    </div>
  )
}
