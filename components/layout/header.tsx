"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { CallbackModal } from "@/components/modals/callback-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [callbackModalOpen, setCallbackModalOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.portfolio, href: "/portfolio" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.faq, href: "/faq" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Digital Base" width={240} height={55} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              onClick={() => setCallbackModalOpen(true)}
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white whitespace-nowrap"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">{t.nav.callback}</span>
              <span className="lg:hidden">{t.nav.callbackShort}</span>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-lg whitespace-nowrap"
            >
              <Link href="/contact">{t.nav.contact}</Link>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  onClick={() => {
                    setCallbackModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.callback}
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-blue-600">
                  <Link href="/contact">{t.nav.contact}</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CallbackModal open={callbackModalOpen} onOpenChange={setCallbackModalOpen} />
    </>
  )
}
