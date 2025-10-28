import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Download />
      <Footer />
    </main>
  )
}
