import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative w-full h-[250px] sm:h-[400px]">
      <Image
        src="/hero.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((dot, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full bg-white ${i === 1 ? "opacity-100" : "opacity-50"}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
