"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/hooks/use-language"

const blogPosts = [
  {
    id: 1,
    title: "AI İnteqrasiyası ilə E-ticarət Gələcəyi",
    excerpt:
      "Süni intellekt texnologiyalarının e-ticarət sahəsində yaratdığı imkanlar və gələcək perspektivlər haqqında ətraflı məlumat.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Texnologiya",
    author: "Digital Base",
    date: "15 Dekabr 2024",
    slug: "ai-integration-ecommerce-future",
    featured: true,
    readTime: "5 dəq",
  },
  {
    id: 2,
    title: "Mobil Tətbiq Dizaynında UX Prinsipləri",
    excerpt: "İstifadəçi təcrübəsini artırmaq üçün mobil tətbiq dizaynında əsas prinsiplər və praktiki tövsiyələr.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Dizayn",
    author: "Digital Base",
    date: "12 Dekabr 2024",
    slug: "mobile-app-ux-principles",
    featured: false,
    readTime: "7 dəq",
  },
  {
    id: 3,
    title: "SEO Strategiyaları 2024",
    excerpt:
      "2024-cü ildə effektiv SEO strategiyaları və axtarış motorlarında üst sıralarda yer almaq üçün tövsiyələr.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketinq",
    author: "Digital Base",
    date: "10 Dekabr 2024",
    slug: "seo-strategies-2024",
    featured: true,
    readTime: "6 dəq",
  },
  {
    id: 4,
    title: "Next.js 15 Yeniliklər və Performans",
    excerpt: "Next.js 15 versiyasında gələn yeniliklər, performans təkmilləşdirmələri və developer təcrübəsi.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Texnologiya",
    author: "Digital Base",
    date: "8 Dekabr 2024",
    slug: "nextjs-15-features-performance",
    featured: false,
    readTime: "8 dəq",
  },
  {
    id: 5,
    title: "E-ticarət Saytlarında Konversiya Optimallaşdırması",
    excerpt: "Onlayn mağazalarda satış artırmaq üçün konversiya optimallaşdırması metodları və praktiki həllər.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketinq",
    author: "Digital Base",
    date: "5 Dekabr 2024",
    slug: "ecommerce-conversion-optimization",
    featured: false,
    readTime: "9 dəq",
  },
  {
    id: 6,
    title: "React Server Components: Gələcəyin Texnologiyası",
    excerpt: "React Server Components texnologiyasının üstünlükləri və real layihələrdə istifadə təcrübəsi.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Texnologiya",
    author: "Digital Base",
    date: "3 Dekabr 2024",
    slug: "react-server-components-future",
    featured: false,
    readTime: "10 dəq",
  },
]

const categories = ["Hamısı", "Texnologiya", "Dizayn", "Marketinq"]

export default function BlogPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("Hamısı")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === "Hamısı" || post.category === selectedCategory
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: t.nav.blog }]} />

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">{t.blog.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.blog.subtitle}</p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Seçilmiş Məqalələr</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
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
                    <Badge className="absolute top-4 left-4" variant="default">
                      Seçilmiş
                    </Badge>
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        {t.common.readMore}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Məqalələrdə axtarış..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
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
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                  <Link href={`/blog/${post.slug}`}>
                    {t.common.readMore}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Axtarış nəticəsində məqalə tapılmadı.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20 p-8 bg-primary/5 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">Layihənizi Müzakirə Edək</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Biznesinizi növbəti səviyyəyə çatdırmaq üçün bizimlə əlaqə saxlayın
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Pulsuz Məsləhət</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
