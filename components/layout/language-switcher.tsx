"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import type { Locale } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const languages = [
    { code: "az" as Locale, name: "Azərbaycan", flag: "🇦🇿" },
    { code: "en" as Locale, name: "English", flag: "🇺🇸" },
    { code: "ru" as Locale, name: "Русский", flag: "🇷🇺" },
  ]

  const currentLang = languages.find((lang) => lang.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-lg">{currentLang?.flag}</span>
          <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLocale(lang.code)} className="cursor-pointer">
            <span className="mr-2 text-lg">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
