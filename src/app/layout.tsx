import type React from "react"
import type { Metadata } from "next"
import { Noto_Naskh_Arabic } from "next/font/google"
import "./globals.css"

const arabic = Noto_Naskh_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "جامعہ نوریہ",
  description: "Islamic Educational Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={arabic.className}>{children}</body>
    </html>
  )
}
