import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Layihənizi Müzakirə Edək</h2>
            <p className="text-xl text-muted-foreground">
              Biznesinizi növbəti səviyyəyə çatdırmaq üçün bizimlə əlaqə saxlayın
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Pulsuz Məsləhət Alın</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Adınız" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Telefon nömrəsi" />
                <Input placeholder="Şirkət adı" />
                <Textarea placeholder="Layihə haqqında qısa məlumat" rows={4} />
                <Button className="w-full" size="lg">
                  Göndər
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Options */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Digər Əlaqə Yolları</h3>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Telefon</h4>
                      <p className="text-muted-foreground">+994 50 123 45 67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp</h4>
                      <p className="text-muted-foreground">Dərhal cavab alın</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">info@digitalbase.az</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-4">
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">Ətraflı Əlaqə Səhifəsi</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
