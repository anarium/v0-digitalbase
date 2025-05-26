import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "E-ticarət Saytlarında Konversiya Optimallaşdırması - Digital Base Blog",
  description: "Onlayn mağazalarda satış artırmaq üçün konversiya optimallaşdırması metodları və praktiki həllər.",
  keywords: ["e-ticarət", "konversiya", "optimallaşdırma", "satış", "CRO"],
}

export default function EcommerceConversionOptimizationPage() {
  const post = {
    title: "E-ticarət Saytlarında Konversiya Optimallaşdırması",
    excerpt: "Onlayn mağazalarda satış artırmaq üçün konversiya optimallaşdırması metodları və praktiki həllər.",
    content: `
      <p>E-ticarət saytlarında konversiya dərəcəsinin artırılması satışların əhəmiyyətli dərəcədə yüksəlməsinə səbəb olur. Bu məqalədə effektiv CRO strategiyalarını araşdıracağıq.</p>
      
      <h2>Konversiya Optimallaşdırması Nədir?</h2>
      <p>Conversion Rate Optimization (CRO) - sayt ziyarətçilərinin müştəriyə çevrilmə dərəcəsini artırmaq üçün tətbiq edilən strategiya və metodlardır.</p>
      
      <h2>Əsas CRO Strategiyaları</h2>
      
      <h3>1. Landing Page Optimallaşdırması</h3>
      <ul>
        <li>Aydın və cəlbedici başlıqlar</li>
        <li>Güclü CTA (Call-to-Action) düymələri</li>
        <li>Sosial sübutlar və rəylər</li>
        <li>Minimal və fokuslu dizayn</li>
      </ul>
      
      <h3>2. Məhsul Səhifələrinin Təkmilləşdirilməsi</h3>
      <ul>
        <li>Yüksək keyfiyyətli məhsul şəkilləri</li>
        <li>Ətraflı məhsul təsvirləri</li>
        <li>Müştəri rəyləri və reytinqlər</li>
        <li>Qiymət və çatdırılma məlumatları</li>
      </ul>
      
      <h3>3. Checkout Prosesinin Sadələşdirilməsi</h3>
      <ul>
        <li>Bir səhifəli checkout</li>
        <li>Qonaq olaraq alış-veriş imkanı</li>
        <li>Çoxsaylı ödəniş üsulları</li>
        <li>SSL sertifikatı və təhlükəsizlik nişanları</li>
      </ul>
      
      <h2>A/B Test Strategiyaları</h2>
      
      <h3>Test Ediləcək Elementlər</h3>
      <ul>
        <li>CTA düymələrinin rəngi və mətni</li>
        <li>Məhsul şəkillərinin sayı və keyfiyyəti</li>
        <li>Qiymət göstərilməsi formatı</li>
        <li>Forma sahələrinin sayı</li>
      </ul>
      
      <h2>Mobil Optimallaşdırma</h2>
      <p>Mobil cihazlardan alış-verişin artması ilə mobil UX optimallaşdırması kritik əhəmiyyət daşıyır:</p>
      <ul>
        <li>Responsive dizayn</li>
        <li>Sürətli yüklənmə</li>
        <li>Barmaq dostu interfeys</li>
        <li>Mobil ödəniş həlləri</li>
      </ul>
      
      <h2>Performans Ölçmə</h2>
      
      <h3>Əsas Metrikalar</h3>
      <ul>
        <li>Konversiya dərəcəsi</li>
        <li>Orta sifariş dəyəri (AOV)</li>
        <li>Səbət tərk etmə dərəcəsi</li>
        <li>Müştəri həyat dəyəri (CLV)</li>
      </ul>
      
      <h2>Nəticə</h2>
      <p>Konversiya optimallaşdırması davamlı prosesdir. Müntəzəm test etmək, analiz etmək və təkmilləşdirmək vacibdir. Kiçik dəyişikliklər böyük nəticələr verə bilər.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Marketinq",
    author: "Digital Base",
    date: "5 Dekabr 2024",
    readTime: "9 dəq",
    tags: ["E-ticarət", "CRO", "Konversiya", "Optimallaşdırma"],
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
