"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Phone, Clock, CheckCircle } from "lucide-react"

interface CallbackModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CallbackModal({ open, onOpenChange }: CallbackModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 2 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", preferredTime: "", message: "" })
      onOpenChange(false)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sorğunuz Qəbul Edildi!</h3>
            <p className="text-muted-foreground">Tezliklə sizinlə əlaqə saxlayacağıq. Təşəkkür edirik!</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Geri Zəng Tələb Et
          </DialogTitle>
          <DialogDescription>Məlumatlarınızı daxil edin, biz sizinlə əlaqə saxlayaq</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Adınız və soyadınız *"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div>
            <Input
              placeholder="Telefon nömrəniz *"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Uyğun vaxt</span>
            </div>
            <Input
              placeholder="Məs: 14:00-18:00 arası"
              value={formData.preferredTime}
              onChange={(e) => handleInputChange("preferredTime", e.target.value)}
            />
          </div>

          <div>
            <Textarea
              placeholder="Qısa məlumat (isteğe bağlı)"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Ləğv Et
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Göndərilir..." : "Zəng Tələb Et"}
            </Button>
          </div>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            📞 Dərhal əlaqə üçün: <span className="font-medium">+994 50 123 45 67</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
