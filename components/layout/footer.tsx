"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Digital Base" width={240} height={55} className="h-12 w-auto" />
            </Link>
            <p className="text-base text-muted-foreground">{t.footer.description}</p>
            <p className="text-sm font-medium text-primary">{t.hero.tagline}</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t.footer.services}</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary">
                  {t.services.webDev}
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-muted-foreground hover:text-primary">
                  {t.services.mobile}
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-solutions" className="text-muted-foreground hover:text-primary">
                  {t.services.ecommerce}
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary">
                  {t.services.design}
                </Link>
              </li>
              <li>
                <Link href="/services/video-production" className="text-muted-foreground hover:text-primary">
                  {t.services.video}
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary">
                  {t.services.marketing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t.footer.contact}</h3>
            <div className="space-y-2 text-base">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+994 50 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@digitalbase.az</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>

            {/* Direct Contact with Icons and Tooltips */}
            <div className="space-y-3">
              <h4 className="font-medium text-base">{t.footer.directContact}</h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="h-10 w-10" title="WhatsApp ilə əlaqə" asChild>
                  <a href="https://wa.me/994501234567" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10" title="Telegram ilə əlaqə" asChild>
                  <a href="https://t.me/digitalbase" target="_blank" rel="noopener noreferrer">
                    <Send className="h-4 w-4 text-blue-500" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10" title="Facebook Messenger" asChild>
                  <a href="https://m.me/digitalbase" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </a>
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-blue-600">
                <Link href="/contact">{t.footer.projectDiscussion}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
