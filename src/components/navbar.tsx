import Link from "next/link"
import { Search } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-[#0a8678] text-white py-3 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        <Link href="/" className="text-right">
          <h1 className="text-lg font-bold">جامعۃ العلوم الاسلامیۃ</h1>
          <p className="text-xs">جامعہ علوم اسلامیہ علامہ محمد یوسف بنوری ٹاؤن</p>
        </Link>

        <div className="flex flex-wrap justify-end items-center gap-4 text-sm">
          {["سروس", "دارالافتاء", "بیانات", "کتابیں", "دعائیں", "آن لائن داخلہ"].map((item, i) => (
            <Link key={i} href="#" className="hover:underline flex items-center gap-1">
              <span>{item}</span>
              <span className="text-xs">▼</span>
            </Link>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="تلاش کریں"
            className="bg-white/20 rounded-full py-1 px-4 pr-10 text-white placeholder-white/70 text-sm w-36 sm:w-40"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
        </div>

        <div className="text-xs hidden sm:block">
          <span>13 شوال 1446ھ</span>
          <span className="mx-1">|</span>
          <span>12 اپریل 2025ء</span>
        </div>
      </div>
    </nav>
  )
}
