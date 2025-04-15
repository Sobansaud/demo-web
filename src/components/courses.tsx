import Image from "next/image"

export default function Courses() {
  const courses = [
    { id: 1, title: "درس نظامی", description: "مدرسہ عربی منظم طریقہ کار پر" },
    { id: 2, title: "تجوید و قراءت", description: "قرآن صحیح تلفظ کے ساتھ پڑھنے کا طریقہ" },
    { id: 3, title: "افتاء کورس", description: "فتوی نویسی اور فقہی رہنمائی کی تربیت" },
    { id: 4, title: "عصری تعلیم", description: "جدید تعلیم کے ساتھ دینی اصولوں کی تربیت" },
  ]

  return (
    <div className="my-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-[#0a8678] text-center mb-10">ہمارے کورسز</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52">
              <Image
                src="/classroom.jpg"
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 text-center flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#0a8678] mb-2">{course.title}</h3>
                <p className="text-sm text-gray-700">{course.description}</p>
              </div>
              <button className="mt-4 text-sm bg-[#0a8678] hover:bg-[#086e63] text-white py-2 px-4 rounded transition-colors duration-300">
                دیکھیں
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
