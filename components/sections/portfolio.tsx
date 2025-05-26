import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "E-ticarət Platforması",
    description: "Müasir onlayn mağaza həlli AI tövsiyələri ilə",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "AI", "PostgreSQL"],
    category: "E-ticarət",
    url: "#",
  },
  {
    title: "Rezervasiya Sistemi",
    description: "Restoran və otel rezervasiya platforması",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Booking",
    url: "#",
  },
  {
    title: "Korporativ Veb Sayt",
    description: "Çoxdilli korporativ veb sayt və CMS",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Strapi", "PostgreSQL"],
    category: "Korporativ",
    url: "#",
  },
  {
    title: "Mobil Tətbiq",
    description: "iOS və Android üçün fintech tətbiqi",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Stripe"],
    category: "Mobil",
    url: "#",
  },
]

export function Portfolio() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Seçilmiş İşlərimiz</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Müştərilərimiz üçün hazırladığımız uğurlu layihələrdən nümunələr
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Layihəni Gör
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">Bütün İşlərimizi Görün</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
