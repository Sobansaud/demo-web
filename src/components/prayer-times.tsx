export default function PrayerTimes() {
  const prayers = [
    { name: "فجر", time: "05:30 AM" },
    { name: "ظہر", time: "01:15 PM" },
    { name: "عصر", time: "05:15 PM" },
    { name: "مغرب", time: "06:35 PM" },
    { name: "عشاء", time: "08:15 PM" },
  ]

  return (
    <div className="my-12">
      <h2 className="text-2xl sm:text-3xl text-[#0a8678] text-center mb-6 sm:mb-8">نماز کے اوقات</h2>
      <div className="prayer-times space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
          {prayers.map((prayer, index) => (
            <div key={index}>
              <div className="text-lg sm:text-xl mb-1">{prayer.name}</div>
              <div className="text-base sm:text-lg font-bold">{prayer.time}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75 0L90 20H60L75 0Z" fill="white" />
            <rect x="65" y="20" width="20" height="40" fill="white" />
            <path d="M10 60H140V100H10V60Z" fill="white" />
            <circle cx="75" cy="40" r="10" fill="white" />
            <rect x="30" y="60" width="10" height="40" fill="white" />
            <rect x="110" y="60" width="10" height="40" fill="white" />
            <path d="M30 60C30 50 45 40 75 40C105 40 120 50 120 60" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}
