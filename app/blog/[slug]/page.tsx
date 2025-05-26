import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const blogPosts = {
  "ai-integration-ecommerce-future": {
    title: "AI İnteqrasiyası ilə E-ticarət Gələcəyi",
    excerpt: "Süni intellekt texnologiyalarının e-ticarət sahəsində yaratdığı imkanlar və gələcək perspektivlər.",
    content: `
      <p>Süni intellekt (AI) texnologiyaları e-ticarət sahəsində inqilab yaradır. Bu məqalədə AI-nin e-ticarət platformalarına necə inteqrasiya edildiyi və gələcək perspektivləri haqqında danışacağıq.</p>
      
      <h2>AI-nin E-ticarətdə İstifadə Sahələri</h2>
      
      <h3>1. Şəxsiləşdirilmiş Tövsiyələr</h3>
      <p>AI alqoritmləri müştərilərin davranışlarını analiz edərək onlara uyğun məhsul tövsiyələri verir. Bu, satışları 20-30% artıra bilər.</p>
      
      <h3>2. Chatbot və Müştəri Xidməti</h3>
      <p>AI-powered chatbotlar 24/7 müştəri dəstəyi təmin edir və adi sualları avtomatik cavablandırır.</p>
      
      <h3>3. Qiymət Optimallaşdırması</h3>
      <p>Dinamik qiymətləndirmə alqoritmləri bazar şəraitinə uyğun olaraq qiymətləri avtomatik tənzimləyir.</p>
      
      <h2>Gələcək Perspektivlər</h2>
      <p>Gələcəkdə AI texnologiyaları daha da inkişaf edəcək və e-ticarət təcrübəsini tamamilə dəyişəcək. Virtual assistentlər, AR/VR inteqrasiyası və daha ağıllı analitika sistemləri gözlənilir.</p>
      
      <h2>Nəticə</h2>
      <p>AI inteqrasiyası e-ticarət sahəsində mütləq zərurətdir. Bu texnologiyaları tez mənimsəyən şirkətlər rəqabətdə öndə olacaqlar.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Texnologiya",
    author: "Digital Base",
    date: "15 Dekabr 2024",
    readTime: "5 dəq",
    tags: ["AI", "E-ticarət", "Texnologiya", "Gələcək"],
  },
  "mobile-app-ux-principles": {
    title: "Mobil Tətbiq Dizaynında UX Prinsipləri",
    excerpt: "İstifadəçi təcrübəsini artırmaq üçün mobil tətbiq dizaynında əsas prinsiplər və praktiki tövsiyələr.",
    content: `
      <p>Mobil tətbiq dizaynında istifadəçi təcrübəsi (UX) uğurun əsas faktorlarından biridir. Bu məqalədə mobil UX-in əsas prinsiplərini araşdıracağıq.</p>
      
      <h2>Əsas UX Prinsipləri</h2>
      
      <h3>1. Sadəlik və Aydınlıq</h3>
      <p>Mobil interfeys sadə və anlaşılan olmalıdır. Hər ekranda yalnız zəruri elementlər olmalıdır.</p>
      
      <h3>2. Toxunma Dostluğu</h3>
      <p>Düymələr və interaktiv elementlər barmaq üçün kifayət qədər böyük olmalıdır (minimum 44px).</p>
      
      <h3>3. Sürətli Yüklənmə</h3>
      <p>Mobil istifadəçilər səbirsizdir. Tətbiq 3 saniyədən çox yüklənərsə, istifadəçilər tərk edə bilər.</p>
      
      <h2>Praktiki Tövsiyələr</h2>
      <ul>
        <li>Thumb-friendly dizayn istifadə edin</li>
        <li>Offline funksionallıq təmin edin</li>
        <li>Push notification-ları düzgün istifadə edin</li>
        <li>Onboarding prosesini sadələşdirin</li>
      </ul>
      
      <h2>Nəticə</h2>
      <p>Yaxşı UX dizayn mobil tətbiqin uğuru üçün həlledicidir. Bu prinsipləri tətbiq edərək istifadəçi məmnuniyyətini artıra bilərsiniz.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Dizayn",
    author: "Digital Base",
    date: "12 Dekabr 2024",
    readTime: "7 dəq",
    tags: ["UX", "Mobil", "Dizayn", "İstifadəçi Təcrübəsi"],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Məqalə tapılmadı - Digital Base Blog",
    }
  }

  return {
    title: `${post.title} - Digital Base Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
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

          {/* Related Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Oxşar Məqalələr</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <Card key={slug} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        <Link href={`/blog/${slug}`} className="hover:text-primary">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
