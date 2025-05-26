"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { CallbackModal } from "@/components/modals/callback-modal"

export function Hero() {
  const { t } = useLanguage()
  const [callbackModalOpen, setCallbackModalOpen] = useState(false)

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Digital Base Hero Background"
          fill
          className="object-cover opacity-10"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-primary">Digital Base</span> ilə {t.hero.title}{" "}
                <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
              </h1>
              <p className="text-lg md:text-xl text-primary/80 font-medium">{t.hero.tagline}</p>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Gəlirlərini artırmaq üçün biznesini rəqəmsallaşdır. {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              <Link href="/contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              onClick={() => setCallbackModalOpen(true)}
              variant="outline"
              size="lg"
              className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Geri Zəng
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.clients}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">{t.hero.stats.support}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

      <CallbackModal open={callbackModalOpen} onOpenChange={setCallbackModalOpen} />
    </section>
  )
}
