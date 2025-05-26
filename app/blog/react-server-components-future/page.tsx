import type { Metadata } from "next"
import ReactServerComponentsFutureClientPage from "./ReactServerComponentsFutureClientPage"

export const metadata: Metadata = {
  title: "React Server Components: Gələcəyin Texnologiyası - Digital Base Blog",
  description: "React Server Components texnologiyasının üstünlükləri və real layihələrdə istifadə təcrübəsi.",
  keywords: ["React", "Server Components", "RSC", "Next.js", "web development"],
}

export default function ReactServerComponentsFuturePage() {
  return <ReactServerComponentsFutureClientPage />
}
