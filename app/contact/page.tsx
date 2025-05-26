"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, CheckCircle, Star } from "lucide-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/hooks/use-language"

const services = [
  "Veb Sayt Hazırlanması",
  "E-ticarət Həlləri",
  "Mobil Tətbiq",
  "UI/UX Dizayn",
  "Video İstehsal",
  "Rəqəmsal Marketinq",
  "Biznes Avtomatlaşdırma",
  "Xüsusi tələb",
]

export default function ContactPage() {
  const { t } = useLanguage()
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call and email notification
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically send the email notification
    console.log("Form submitted:", { ...formData, services: selectedServices })

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      setSelectedServices([])
    }, 3000)
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: t.nav.contact }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gəlirlərini artırmaq üçün biznesini rəqəmsallaşdır. {t.contact.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              24 saat ərzində cavab
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Pulsuz məsləhət
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Məxfilik təminatı
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">{t.contact.form.quickContact}</CardTitle>
                <p className="text-muted-foreground">Formu doldurun və 24 saat ərzində sizinlə əlaqə saxlayaq</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sorğunuz Göndərildi!</h3>
                    <p className="text-muted-foreground">
                      Email bildirişi göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t.contact.form.name} *</label>
                        <Input
                          placeholder="Adınızı daxil edin"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t.contact.form.email} *</label>
                        <Input
                          placeholder="email@example.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t.contact.form.phone}</label>
                        <Input
                          placeholder="+994 50 123 45 67"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t.contact.form.company}</label>
                        <Input
                          placeholder="Şirkət adı"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">{t.contact.form.services}</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                            />
                            <label htmlFor={service} className="text-sm cursor-pointer">
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">{t.contact.form.message}</label>
                      <Textarea
                        placeholder="Layihənizin təfərrüatlarını bizə danışın..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-blue-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Göndərilir..." : t.contact.form.send}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Formu göndərməklə{" "}
                      <a href="/privacy-policy" className="underline">
                        Məxfilik Siyasətimizi
                      </a>{" "}
                      qəbul etmiş olursunuz
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Birbaşa Əlaqə</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Dərhal cavab</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">+994 50 123 45 67</p>
                    <p className="text-sm text-muted-foreground">Zəng edin</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">info@digitalbase.az</p>
                    <p className="text-sm text-muted-foreground">Email göndərin</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Ofis Məlumatları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Ünvan</p>
                    <p className="text-sm text-muted-foreground">Nizami küçəsi 203, Bakı, Azərbaycan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">İş saatları</p>
                    <p className="text-sm text-muted-foreground">
                      B.e - Cümə: 09:00 - 18:00
                      <br />
                      Şənbə: 10:00 - 15:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Elements */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Niyə Bizi Seçməlisiniz?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">4.9/5 müştəri reytinqi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">150+ uğurlu layihə</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Məlumat təhlükəsizliyi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">24 saat ərzində cavab</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Tez-tez Verilən Suallar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Layihə nə qədər vaxt alır?</h3>
                <p className="text-sm text-muted-foreground">
                  Layihənin mürəkkəbliyindən asılı olaraq 2-6 ay arası dəyişir. Dəqiq müddəti ilkin görüşdə müəyyən
                  edirik.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Qiymətlər necə müəyyən edilir?</h3>
                <p className="text-sm text-muted-foreground">
                  Hər layihə fərdidir. Tələblərinizi öyrəndikdən sonra şəxsi təklif hazırlayırıq.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Texniki dəstək təmin edilirmi?</h3>
                <p className="text-sm text-muted-foreground">
                  Bəli, layihə tamamlandıqdan sonra 6 ay pulsuz texniki dəstək təmin edirik.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Ödəniş şərtləri necədir?</h3>
                <p className="text-sm text-muted-foreground">
                  Layihəni mərhələlərə bölərək, hər mərhələ üçün ayrıca ödəniş qəbul edirik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
