import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "AI İnteqrasiyası ilə E-ticarət Gələcəyi",
    excerpt: "Süni intellekt texnologiyalarının e-ticarət sahəsində yaratdığı imkanlar və gələcək perspektivlər.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Texnologiya",
    author: "Əli Məmmədov",
    date: "15 Dekabr 2024",
    slug: "ai-integration-ecommerce-future",
  },
  {
    title: "Mobil Tətbiq Dizaynında UX Prinsipləri",
    excerpt: "İstifadəçi təcrübəsini artırmaq üçün mobil tətbiq dizaynında əsas prinsiplər və tövsiyələr.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Dizayn",
    author: "Leyla Həsənova",
    date: "12 Dekabr 2024",
    slug: "mobile-app-ux-principles",
  },
  {
    title: "SEO Strategiyaları 2024",
    excerpt:
      "2024-cü ildə effektiv SEO strategiyaları və axtarış motorlarında üst sıralarda yer almaq üçün tövsiyələr.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketinq",
    author: "Rəşad Quliyev",
    date: "10 Dekabr 2024",
    slug: "seo-strategies-2024",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Son Bloq Yazıları</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Texnologiya və rəqəmsal marketinq sahəsində ən son məlumatlar və tövsiyələr
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {post.category}
                </Badge>
              </div>
              <CardHeader className="space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                  <Link href={`/blog/${post.slug}`}>
                    Oxumağa davam et
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/blog">Bütün Məqalələr</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
