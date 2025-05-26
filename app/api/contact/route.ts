import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, services } = body

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      services,
      timestamp: new Date().toISOString(),
    })

    // Simulate email notification
    // In production, you would use a service like SendGrid, Nodemailer, etc.
    const emailNotification = {
      to: "info@digitalbase.az",
      subject: `Yeni əlaqə sorğusu - ${name}`,
      html: `
        <h2>Yeni Əlaqə Sorğusu</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Göstərilməyib"}</p>
        <p><strong>Şirkət:</strong> ${company || "Göstərilməyib"}</p>
        <p><strong>Xidmətlər:</strong> ${services?.join(", ") || "Seçilməyib"}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <p><strong>Tarix:</strong> ${new Date().toLocaleString("az-AZ")}</p>
      `,
    }

    console.log("Email notification would be sent:", emailNotification)

    return NextResponse.json(
      {
        success: true,
        message: "Sorğunuz uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.",
      },
      { status: 500 },
    )
  }
}
