import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Next.js 15 Yeniliklər və Performans - Digital Base Blog",
  description: "Next.js 15 versiyasında gələn yeniliklər, performans təkmilləşdirmələri və developer təcrübəsi.",
  keywords: ["Next.js", "React", "web development", "performance", "yeniliklər"],
}

export default function NextJS15FeaturesPage() {
  const post = {
    title: "Next.js 15 Yeniliklər və Performans",
    excerpt: "Next.js 15 versiyasında gələn yeniliklər, performans təkmilləşdirmələri və developer təcrübəsi.",
    content: `
      <p>Next.js 15 versiyası web development sahəsində yeni standartlar müəyyən edir. Bu məqalədə əsas yeniliklər və performans təkmilləşdirmələrini araşdıracağıq.</p>
      
      <h2>Next.js 15-in Əsas Yenilikləri</h2>
      
      <h3>1. React 19 Dəstəyi</h3>
      <p>Next.js 15 React 19-un bütün yeniliklərini dəstəkləyir, o cümlədən Server Components və yeni Concurrent Features.</p>
      
      <h3>2. Turbopack Stable</h3>
      <p>Rust əsaslı bundler Turbopack artıq stabil versiyadadır və Webpack-dən 10x daha sürətlidir.</p>
      
      <h3>3. Yeni Caching Strategiyası</h3>
      <p>Daha ağıllı və effektiv caching mexanizmləri ilə səhifə yüklənmə sürəti əhəmiyyətli dərəcədə artırılıb.</p>
      
      <h2>Performans Təkmilləşdirmələri</h2>
      
      <h3>Build Performansı</h3>
      <ul>
        <li>50% daha sürətli build prosesi</li>
        <li>Paralel compilation</li>
        <li>Incremental builds</li>
        <li>Memory usage optimallaşdırması</li>
      </ul>
      
      <h3>Runtime Performansı</h3>
      <ul>
        <li>Daha sürətli hydration</li>
        <li>Optimallaşdırılmış bundle size</li>
        <li>Lazy loading təkmilləşdirmələri</li>
        <li>Edge runtime yaxşılaşmaları</li>
      </ul>
      
      <h2>Developer Experience</h2>
      
      <h3>Yeni Dev Tools</h3>
      <p>Next.js 15 ilə gələn yeni development tools debugging və development prosesini asanlaşdırır.</p>
      
      <h3>TypeScript Təkmilləşdirmələri</h3>
      <p>Daha yaxşı type inference və error handling ilə TypeScript təcrübəsi təkmilləşdirilib.</p>
      
      <h2>Migration Guide</h2>
      <p>Next.js 14-dən 15-ə keçid üçün addım-addım təlimat:</p>
      <ol>
        <li>Dependencies yeniləyin</li>
        <li>Config fayllarını yoxlayın</li>
        <li>Breaking changes-ləri araşdırın</li>
        <li>Test edin və deploy edin</li>
      </ol>
      
      <h2>Nəticə</h2>
      <p>Next.js 15 web development üçün güclü alətlər və performans təkmilləşdirmələri təqdim edir. Yeni layihələr üçün mütləq tövsiyə edilir.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Texnologiya",
    author: "Digital Base",
    date: "8 Dekabr 2024",
    readTime: "8 dəq",
    tags: ["Next.js", "React", "Web Development", "Performance"],
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
