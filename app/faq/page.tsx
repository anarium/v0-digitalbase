import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone, Mail, ArrowRight, CheckCircle, Star, Zap } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Tez-tez Verilən Suallar (FAQ) - Digital Base",
  description:
    "Digital Base xidmətləri, qiymətlər, layihə prosesi və texniki dəstək haqqında tez-tez verilən suallar və cavablar.",
  keywords: ["FAQ", "suallar", "cavablar", "digital base", "xidmətlər", "qiymətlər", "layihə prosesi"],
  openGraph: {
    title: "Tez-tez Verilən Suallar (FAQ) - Digital Base",
    description:
      "Digital Base xidmətləri, qiymətlər, layihə prosesi və texniki dəstək haqqında tez-tez verilən suallar və cavablar.",
  },
}

const faqCategories = [
  {
    title: "Ümumi Suallar",
    faqs: [
      {
        question: "Digital Base nə vaxtdan fəaliyyət göstərir?",
        answer:
          "Digital Base 2019-cu ildən bəri Azərbaycanda rəqəmsal sahədə fəaliyyət göstərir və bu müddət ərzində 150+ uğurlu layihə tamamlamışıq.",
      },
      {
        question: "Hansı xidmətləri təqdim edirsiniz?",
        answer:
          "Biz veb sayt hazırlanması, mobil tətbiq inkişafı, UI/UX dizayn, e-ticarət həlləri, rəqəmsal marketinq, SEO optimallaşdırma, ERP sistemləri və biznes avtomatlaşdırma xidmətləri təqdim edirik.",
      },
      {
        question: "Hansı şirkətlərlə işləyirsiniz?",
        answer:
          "Biz kiçik startuplardan tutmuş böyük korporasiyalara qədər müxtəlif ölçülü şirkətlərlə işləyirik. Hər bir müştəriyə fərdi yanaşma tətbiq edirik.",
      },
      {
        question: "Ofisinizdə görüş təşkil etmək olarmı?",
        answer:
          "Əlbəttə! Bakı şəhərindəki ofisimizdə görüş təşkil edə bilərsiniz. Əvvəlcədən təyin almaq üçün bizimlə əlaqə saxlayın.",
      },
    ],
  },
  {
    title: "Layihə Prosesi",
    faqs: [
      {
        question: "Layihə necə başlayır?",
        answer:
          "İlk olaraq pulsuz məsləhət görüşü keçiririk, tələblərinizi öyrənirik, texniki tapşırıq hazırlayırıq və layihə planı təqdim edirik.",
      },
      {
        question: "Layihə nə qədər vaxt alır?",
        answer:
          "Layihənin mürəkkəbliyindən asılı olaraq 2-6 ay arası dəyişir. Sadə veb saytlar 2-4 həftə, mürəkkəb ERP sistemləri və e-ticarət platformaları 3-6 ay çəkə bilər.",
      },
      {
        question: "Layihə gedişatını necə izləyə bilərəm?",
        answer:
          "Hər həftə progress hesabatları göndəririk və xüsusi layihə idarəetmə platforması vasitəsilə real vaxtda gedişatı izləyə bilərsiniz.",
      },
      {
        question: "Layihədə dəyişikliklər etmək olarmı?",
        answer:
          "Bəli, layihə gedişatında dəyişikliklər etmək mümkündür. Əlavə xüsusiyyətlər üçün əlavə ödəniş tələb oluna bilər.",
      },
    ],
  },
  {
    title: "Qiymətlər və Ödəniş",
    faqs: [
      {
        question: "Qiymətlər necə müəyyən edilir?",
        answer:
          "Qiymətlər layihənin mürəkkəbliyi, funksionallıq, dizayn tələbləri və müddətə görə müəyyən edilir. Hər layihə üçün fərdi təklif hazırlanır.",
      },
      {
        question: "Ödəniş şərtləri necədir?",
        answer:
          "Adətən layihəni mərhələlərə bölərək, hər mərhələ üçün ayrıca ödəniş qəbul edirik. İlkin ödəniş 30-50% arası olur.",
      },
      {
        question: "Hansı ödəniş üsullarını qəbul edirsiniz?",
        answer: "Bank köçürməsi, nağd ödəniş və onlayn ödəniş sistemləri (kart ilə) qəbul edirik.",
      },
      {
        question: "Layihə büdcəsi artarsa nə olur?",
        answer:
          "Əlavə xüsusiyyətlər və ya dəyişikliklər üçün əvvəlcədən razılaşma aparırıq və şəffaf qiymətləndirmə təqdim edirik.",
      },
    ],
  },
  {
    title: "Texniki Məsələlər",
    faqs: [
      {
        question: "Hansı texnologiyalardan istifadə edirsiniz?",
        answer:
          "Next.js, React, Node.js, PostgreSQL, MongoDB, AWS kimi müasir texnologiyalardan istifadə edirik. Layihəyə uyğun ən optimal texnologiyaları seçirik.",
      },
      {
        question: "Saytım mobil cihazlarda işləyəcəkmi?",
        answer: "Bəli, bütün layihələrimiz responsive dizayn ilə hazırlanır və bütün cihazlarda mükəmməl işləyir.",
      },
      {
        question: "SEO optimallaşdırması daxildirmi?",
        answer:
          "Bəli, bütün veb saytlarımızda əsas SEO optimallaşdırması və ranking artırma daxildir. Əlavə SEO xidmətləri ayrıca təklif edilir.",
      },
      {
        question: "Saytımın təhlükəsizliyi necə təmin edilir?",
        answer:
          "SSL sertifikatı, təhlükəsizlik yeniləmələri, backup sistemi və digər təhlükəsizlik tədbirləri tətbiq edirik.",
      },
    ],
  },
  {
    title: "Dəstək və Xidmət",
    faqs: [
      {
        question: "Layihə bitdikdən sonra dəstək verirsinizsə?",
        answer:
          "Bəli, layihə tamamlandıqdan sonra 6 ay pulsuz texniki dəstək təmin edirik. Sonra aylıq dəstək paketləri mövcuddur.",
      },
      {
        question: "Saytımda problem yaranarsa nə etməliyəm?",
        answer:
          "Dərhal bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk və kritik problemləri təcili həll edirik.",
      },
      {
        question: "Saytımı özüm yeniləyə bilərəmmi?",
        answer:
          "Bəli, CMS (Content Management System) ilə hazırladığımız saytları özünüz asanlıqla yeniləyə bilərsiniz. Təlim də veririk.",
      },
      {
        question: "Hosting və domain xidməti verirsinizsə?",
        answer:
          "Bəli, hosting və domain qeydiyyatı xidmətləri təqdim edirik. Həmçinin mövcud hostinqinizə də quraşdırma edə bilərik.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "FAQ" }]} />

        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">Tez-tez Verilən Suallar</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Digital Base xidmətləri, layihə prosesi və texniki məsələlər haqqında ən çox verilən sualların cavabları
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline text-lg">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-blue-50">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Sualınızın cavabını tapa bilmədiniz?</CardTitle>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Narahat olmayın! Mütəxəssislərimiz sizə kömək etməyə hazırdır. Bizimlə əlaqə saxlayın və 24 saat ərzində
                cavab alın.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">WhatsApp</h3>
                  <p className="text-base text-muted-foreground mb-4">Dərhal cavab alın</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Mesaj Göndər
                  </Button>
                </Card>

                <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Telefon</h3>
                  <p className="text-base text-muted-foreground mb-4">+994 50 123 45 67</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Zəng Et
                  </Button>
                </Card>

                <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <Mail className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Email</h3>
                  <p className="text-base text-muted-foreground mb-4">info@digitalbase.az</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Email Göndər
                  </Button>
                </Card>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-blue-600">
                  <Link href="/contact">
                    Sürətli Əlaqə Formu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Your Project is Next Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-primary text-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Sizin Layihəniz Növbətidir!</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                150+ uğurlu layihədən sonra növbə sizin layihənizdədir. Gəlin birlikdə biznesinizi rəqəmsallaşdıraq və
                gəlirlərini artıraq.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link href="/contact">Layihəmi Başlat</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/portfolio">Uğur Hekayələri</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ready to Work Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Bizimlə İşləməyə Hazırsınız?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Rəqəmsal transformasiya yolculuğunuza bugün başlayın. Mütəxəssislərimiz sizin uğurunuz üçün hazırdır.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Pulsuz Məsləhət</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Fərdi Yanaşma</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">24/7 Dəstək</p>
                </div>
              </div>
              <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-green-600 to-blue-600">
                <Link href="/contact">
                  İndi Başlayaq
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
