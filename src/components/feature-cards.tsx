import Image from "next/image"

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      <div className="bg-white shadow rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-right">
          <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">تعارف جامعہ نوریہ ٹاؤن</h3>
          <p className="text-sm sm:text-lg">جامعہ اور اس کی خصوصیات ایک نظر میں</p>
        </div>
        <Image src="/islamic-column.png" alt="Islamic Pattern" width={80} height={80} className="w-20 h-20" />
      </div>

      <div className="bg-[#0a8678] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-right">
          <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">بانی جامعہ حضرت نوری رحمہ اللہ</h3>
          <p className="text-sm sm:text-lg">تعارف، علمی و تحقیقی مقالات</p>
        </div>
        <Image src="/islamic-column.png" alt="Islamic Pattern" width={80} height={80} className="w-20 h-20" />
      </div>
    </div>
  )
}
