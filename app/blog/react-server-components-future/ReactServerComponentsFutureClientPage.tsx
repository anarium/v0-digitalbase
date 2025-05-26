"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ReactServerComponentsFutureClientPage() {
  const post = {
    title: "React Server Components: Gələcəyin Texnologiyası",
    excerpt: "React Server Components texnologiyasının üstünlükləri və real layihələrdə istifadə təcrübəsi.",
    content: `
      <p>React Server Components (RSC) web development sahəsində paradigma dəyişikliyi yaradır. Bu məqalədə RSC-nin üstünlüklərini və praktiki istifadəsini araşdıracağıq.</p>
      
      <h2>React Server Components Nədir?</h2>
      <p>Server Components React komponentlərinin server tərəfində render edilməsinə imkan verir, bu da performans və istifadəçi təcrübəsini əhəmiyyətli dərəcədə yaxşılaşdırır.</p>
      
      <h2>Əsas Üstünlüklər</h2>
      
      <h3>1. Performans Təkmilləşdirmələri</h3>
      <ul>
        <li>Daha kiçik JavaScript bundle ölçüsü</li>
        <li>Sürətli ilk səhifə yüklənməsi</li>
        <li>Daha az client-side hesablama</li>
        <li>Optimallaşdırılmış network istifadəsi</li>
      </ul>
      
      <h3>2. Developer Experience</h3>
      <ul>
        <li>Sadə data fetching</li>
        <li>Avtomatik code splitting</li>
        <li>Daha az boilerplate kod</li>
        <li>TypeScript dəstəyi</li>
      </ul>
      
      <h2>Server vs Client Components</h2>
      
      <h3>Server Components üçün uyğun hallar:</h3>
      <ul>
        <li>Data fetching</li>
        <li>Backend resurslarına giriş</li>
        <li>Böyük dependencies</li>
        <li>Sensitive məlumatlar</li>
      </ul>
      
      <h3>Client Components üçün uyğun hallar:</h3>
      <ul>
        <li>Interaktivlik</li>
        <li>Event handlers</li>
        <li>Browser APIs</li>
        <li>State management</li>
      </ul>
      
      <h2>Praktiki İstifadə Nümunələri</h2>
      
      <h3>Data Fetching</h3>
      <p>Server Components ilə data fetching daha sadə və effektiv olur:</p>
      
      <pre><code>
// Server Component
async function ProductList() {
  const products = await fetch('/api/products')
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
      </code></pre>
      
      <h2>Migration Strategiyası</h2>
      
      <h3>Addım-addım keçid:</h3>
      <ol>
        <li>Next.js 13+ versiyasına yeniləyin</li>
        <li>App Router istifadə edin</li>
        <li>Server Components ilə başlayın</li>
        <li>Lazım olduqda Client Components əlavə edin</li>
      </ol>
      
      <h2>Best Practices</h2>
      
      <ul>
        <li>Server Components-i default olaraq istifadə edin</li>
        <li>"use client" direktivi yalnız lazım olduqda əlavə edin</li>
        <li>Data fetching-i Server Components-də edin</li>
        <li>Composition pattern-dən istifadə edin</li>
      </ul>
      
      <h2>Gələcək Perspektivlər</h2>
      <p>React Server Components React ekosisteminin gələcəyini formalaşdırır. Meta və Vercel komandaları bu texnologiyanı daha da təkmilləşdirməyə davam edir.</p>
      
      <h2>Nəticə</h2>
      <p>React Server Components modern web development üçün güclü alətdir. Performans və developer experience baxımından əhəmiyyətli üstünlüklər təqdim edir.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Texnologiya",
    author: "Digital Base",
    date: "3 Dekabr 2024",
    readTime: "10 dəq",
    tags: ["React", "Server Components", "Next.js", "Performance"],
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Bloga Qayıt
            </Link>
          </Button>

          {/* Article Header */}
          <div className="space-y-6 mb-12">
            <div className="space-y-4">
              <Badge variant="secondary">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Paylaş
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Etiketlər</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <Card className="mb-12 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/logo.png"
                  alt={post.author}
                  width={80}
                  height={80}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{post.author}</h3>
                  <p className="text-muted-foreground text-sm mb-2">Azərbaycanda aparıcı rəqəmsal agentlik</p>
                  <p className="text-sm">
                    Digital Base komandası olaraq, ən son texnologiya trendləri və praktiki həllər haqqında məqalələr
                    yazırıq.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
