import Navbar from "../components/navbar"
import Hero from "../components/hero"
import FeatureCards from "../components/feature-cards"
import Questions from "../components/questions"
import Courses from "../components/courses"
import PrayerTimes from "../components/prayer-times"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FeatureCards />
        <Questions />
        <Courses />
        <PrayerTimes />
      </div>
    </main>
  )
}
