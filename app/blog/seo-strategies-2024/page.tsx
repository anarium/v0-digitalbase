import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "SEO Strategiyaları 2024 - Digital Base Blog",
  description:
    "2024-cü ildə effektiv SEO strategiyaları və axtarış motorlarında üst sıralarda yer almaq üçün tövsiyələr.",
  keywords: ["SEO", "axtarış motorları", "Google", "strategiya", "2024"],
}

export default function SEOStrategies2024Page() {
  const post = {
    title: "SEO Strategiyaları 2024",
    excerpt:
      "2024-cü ildə effektiv SEO strategiyaları və axtarış motorlarında üst sıralarda yer almaq üçün tövsiyələr.",
    content: `
      <p>2024-cü ildə SEO sahəsində yeni trendlər və strategiyalar formalaşır. Bu məqalədə ən effektiv SEO yanaşmalarını araşdıracağıq.</p>
      
      <h2>2024-cü İldə SEO Trendləri</h2>
      
      <h3>1. AI və Maşın Öyrənməsi</h3>
      <p>Google-ın AI alqoritmlərinin təkmilləşməsi ilə məzmun keyfiyyəti daha da vacib olur. RankBrain və BERT kimi sistemlər istifadəçi niyyətini daha yaxşı başa düşür.</p>
      
      <h3>2. Core Web Vitals</h3>
      <p>Səhifə yüklənmə sürəti, interaktivlik və vizual sabitlik Google reytinqində mühüm faktorlardır.</p>
      
      <h3>3. E-A-T (Expertise, Authoritativeness, Trustworthiness)</h3>
      <p>Ekspertlik, avtoritet və etibarlılıq xüsusilə YMYL (Your Money Your Life) sahələrində kritik əhəmiyyət daşıyır.</p>
      
      <h2>Praktiki SEO Strategiyaları</h2>
      
      <h3>Məzmun Strategiyası</h3>
      <ul>
        <li>İstifadəçi niyyətinə uyğun məzmun yaradın</li>
        <li>Uzun format məqalələr yazın (1500+ söz)</li>
        <li>Mövzu klasterlərindən istifadə edin</li>
        <li>Video və infografik əlavə edin</li>
      </ul>
      
      <h3>Texniki SEO</h3>
      <ul>
        <li>Səhifə sürətini optimallaşdırın</li>
        <li>Mobil-first indeksləşdirmə üçün hazırlanın</li>
        <li>Structured data markup istifadə edin</li>
        <li>XML sitemap və robots.txt fayllarını yeniləyin</li>
      </ul>
      
      <h2>Yerli SEO</h2>
      <p>Azərbaycan bazarı üçün yerli SEO xüsusilə vacibdir. Google My Business profilinizi optimallaşdırın və yerli açar sözlərdən istifadə edin.</p>
      
      <h2>Nəticə</h2>
      <p>2024-cü ildə SEO uğuru üçün keyfiyyətli məzmun, texniki optimallaşdırma və istifadəçi təcrübəsinə diqqət yetirin. AI və maşın öyrənməsi trendlərini izləyin.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Marketinq",
    author: "Digital Base",
    date: "10 Dekabr 2024",
    readTime: "6 dəq",
    tags: ["SEO", "Google", "Marketinq", "Strategiya"],
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
