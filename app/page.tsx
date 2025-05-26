import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { BlogPreview } from "@/components/sections/blog-preview"
import { ContactCTA } from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <BlogPreview />
      <ContactCTA />
    </main>
  )
}
