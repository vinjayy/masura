"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Mail, Server, Shield, Settings, CheckCircle, AlertTriangle, Copy } from "lucide-react"
import { useState } from "react"

export default function SMTPGuide() {
  const [showPassword, setShowPassword] = useState(false)
  const [copiedText, setCopiedText] = useState("")

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(""), 2000)
  }

  const smtpProviders = [
    {
      name: "Gmail",
      host: "smtp.gmail.com",
      port: "587",
      security: "STARTTLS",
      auth: "App Password Required",
      setup: "Enable 2FA → Generate App Password",
    },
    {
      name: "Outlook/Hotmail",
      host: "smtp-mail.outlook.com",
      port: "587",
      security: "STARTTLS",
      auth: "Regular Password",
      setup: "Use regular email credentials",
    },
    {
      name: "Yahoo",
      host: "smtp.mail.yahoo.com",
      port: "587",
      security: "STARTTLS",
      auth: "App Password Required",
      setup: "Enable 2FA → Generate App Password",
    },
    {
      name: "SendGrid",
      host: "smtp.sendgrid.net",
      port: "587",
      security: "STARTTLS",
      auth: "API Key",
      setup: "Create API Key in dashboard",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f1eee9] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#2e5844] hover:bg-[#2e5844]/90">
            <Mail className="w-4 h-4 mr-2" />
            Email Configuration Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Panduan Setting <span className="text-[#2e5844]">SMTP Email</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Panduan lengkap untuk mengkonfigurasi SMTP server agar form kontak website dapat mengirim email secara
            otomatis
          </p>
        </div>

        {/* Quick Setup Alert */}
        <Alert className="mb-8 border-[#2e5844] bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Rekomendasi:</strong> Untuk kemudahan setup, gunakan Gmail dengan App Password atau layanan email
            transaksional seperti SendGrid.
          </AlertDescription>
        </Alert>

        {/* SMTP Providers Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Server className="h-8 w-8 text-[#2e5844] mr-3" />
            Provider SMTP Populer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smtpProviders.map((provider, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-[#2e5844] text-lg">{provider.name}</CardTitle>
                  <CardDescription className="text-sm">{provider.setup}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Host:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">{provider.host}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Port:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">{provider.port}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security:</span>
                      <Badge variant="outline" className="text-xs">
                        {provider.security}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Auth:</span>
                      <span className="text-xs font-medium">{provider.auth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="h-8 w-8 text-[#2e5844] mr-3" />
            Langkah-langkah Konfigurasi
          </h2>

          <div className="space-y-8">
            {/* Step 1: Environment Variables */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#2e5844] flex items-center">
                  <span className="bg-[#2e5844] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                    1
                  </span>
                  Setup Environment Variables
                </CardTitle>
                <CardDescription>Buat file .env.local di root project dan tambahkan konfigurasi SMTP</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span># SMTP Configuration</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-400 hover:text-green-300"
                        onClick={() =>
                          copyToClipboard(
                            `# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_FROM_NAME="PT Masura Indo Perkasa"`,
                            "Environment Variables",
                          )
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>SMTP_HOST=smtp.gmail.com</div>
                    <div>SMTP_PORT=587</div>
                    <div>SMTP_USER=your-email@gmail.com</div>
                    <div>SMTP_PASS=your-app-password</div>
                    <div>SMTP_FROM=your-email@gmail.com</div>
                    <div>SMTP_FROM_NAME="PT Masura Indo Perkasa"</div>
                  </div>
                </div>
                {copiedText === "Environment Variables" && (
                  <p className="text-green-600 text-sm mt-2">✓ Copied to clipboard!</p>
                )}

                <Alert className="mt-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Penting:</strong> Jangan commit file .env.local ke repository. Tambahkan ke .gitignore untuk
                    keamanan.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Step 2: Gmail App Password Setup */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#2e5844] flex items-center">
                  <span className="bg-[#2e5844] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                    2
                  </span>
                  Setup Gmail App Password (Recommended)
                </CardTitle>
                <CardDescription>
                  Cara membuat App Password untuk Gmail (lebih aman dari password biasa)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Langkah-langkah:</h4>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="bg-[#2e5844] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            1
                          </span>
                          Buka Google Account Settings
                        </li>
                        <li className="flex items-start">
                          <span className="bg-[#2e5844] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            2
                          </span>
                          Pilih "Security" → "2-Step Verification"
                        </li>
                        <li className="flex items-start">
                          <span className="bg-[#2e5844] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            3
                          </span>
                          Aktifkan 2-Step Verification
                        </li>
                        <li className="flex items-start">
                          <span className="bg-[#2e5844] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            4
                          </span>
                          Pilih "App passwords"
                        </li>
                        <li className="flex items-start">
                          <span className="bg-[#2e5844] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            5
                          </span>
                          Generate password untuk "Mail"
                        </li>
                        <li className="flex items-start">
                          <span className="bg-[#2e5844] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            6
                          </span>
                          Copy password dan gunakan di SMTP_PASS
                        </li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Keamanan
                      </h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• App Password lebih aman dari password biasa</li>
                        <li>• Dapat di-revoke kapan saja</li>
                        <li>• Tidak memberikan akses penuh ke akun</li>
                        <li>• Khusus untuk aplikasi tertentu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Install Dependencies */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#2e5844] flex items-center">
                  <span className="bg-[#2e5844] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                    3
                  </span>
                  Install Dependencies
                </CardTitle>
                <CardDescription>Install package yang diperlukan untuk mengirim email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span># Install nodemailer dan types</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-green-400 hover:text-green-300"
                      onClick={() => copyToClipboard("npm install nodemailer @types/nodemailer", "NPM Install")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>npm install nodemailer @types/nodemailer</div>
                </div>
                {copiedText === "NPM Install" && <p className="text-green-600 text-sm mt-2">✓ Copied to clipboard!</p>}
              </CardContent>
            </Card>

            {/* Step 4: API Route */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#2e5844] flex items-center">
                  <span className="bg-[#2e5844] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                    4
                  </span>
                  Buat API Route untuk Email
                </CardTitle>
                <CardDescription>Buat file app/api/send-email/route.ts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto max-h-96 overflow-y-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">// app/api/send-email/route.ts</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-green-400 hover:text-green-300"
                      onClick={() =>
                        copyToClipboard(
                          `import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, product, message } = await request.json()

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Konfigurasi transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true untuk port 465, false untuk port lainnya
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verifikasi koneksi SMTP
    await transporter.verify()

    // Template email
    const mailOptions = {
      from: \`"\${process.env.SMTP_FROM_NAME}" <\${process.env.SMTP_FROM}>\`,
      to: process.env.SMTP_USER, // Email tujuan (email perusahaan)
      subject: \`Inquiry Baru dari \${name} - PT Masura Indo Perkasa\`,
      html: \`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2e5844; color: white; padding: 20px; text-align: center;">
            <h1>Inquiry Baru dari Website</h1>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #2e5844;">Detail Kontak:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Nama:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Perusahaan:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${company || 'Tidak disebutkan'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Produk Diminati:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${product || 'Tidak disebutkan'}</td>
              </tr>
            </table>
            <h3 style="color: #2e5844; margin-top: 20px;">Pesan:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #2e5844; margin-top: 10px;">
              \${message.replace(/\\n/g, '<br>')}
            </div>
          </div>
          <div style="background-color: #2e5844; color: white; padding: 15px; text-align: center; font-size: 12px;">
            Email ini dikirim otomatis dari website PT Masura Indo Perkasa
          </div>
        </div>
      \`,
    }

    // Kirim email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}`,
                          "API Route",
                        )
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="whitespace-pre-wrap text-xs">{`import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, product, message } = await request.json()

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Konfigurasi transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true untuk port 465, false untuk port lainnya
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verifikasi koneksi SMTP
    await transporter.verify()

    // Template email
    const mailOptions = {
      from: \`"\${process.env.SMTP_FROM_NAME}" <\${process.env.SMTP_FROM}>\`,
      to: process.env.SMTP_USER, // Email tujuan (email perusahaan)
      subject: \`Inquiry Baru dari \${name} - PT Masura Indo Perkasa\`,
      html: \`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2e5844; color: white; padding: 20px; text-align: center;">
            <h1>Inquiry Baru dari Website</h1>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #2e5844;">Detail Kontak:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Nama:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Perusahaan:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${company || 'Tidak disebutkan'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Produk Diminati:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">\${product || 'Tidak disebutkan'}</td>
              </tr>
            </table>
            <h3 style="color: #2e5844; margin-top: 20px;">Pesan:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #2e5844; margin-top: 10px;">
              \${message.replace(/\\n/g, '<br>')}
            </div>
          </div>
          <div style="background-color: #2e5844; color: white; padding: 15px; text-align: center; font-size: 12px;">
            Email ini dikirim otomatis dari website PT Masura Indo Perkasa
          </div>
        </div>
      \`,
    }

    // Kirim email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}`}</pre>
                </div>
                {copiedText === "API Route" && <p className="text-green-600 text-sm mt-2">✓ Copied to clipboard!</p>}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testing Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 text-[#2e5844] mr-3" />
            Testing & Troubleshooting
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#2e5844]">Test Konfigurasi</CardTitle>
                <CardDescription>Cara menguji apakah SMTP sudah bekerja dengan benar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Isi form kontak di website dan kirim test message</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Check console browser untuk error messages</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Periksa email masuk di inbox perusahaan</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Check spam folder jika email tidak masuk</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">Common Issues</CardTitle>
                <CardDescription>Masalah umum dan solusinya</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-red-600">Error: Invalid login</strong>
                    <p className="text-gray-600">→ Pastikan menggunakan App Password, bukan password biasa</p>
                  </div>
                  <div>
                    <strong className="text-red-600">Error: Connection timeout</strong>
                    <p className="text-gray-600">→ Periksa firewall atau gunakan port 465 dengan secure: true</p>
                  </div>
                  <div>
                    <strong className="text-red-600">Email masuk ke spam</strong>
                    <p className="text-gray-600">→ Setup SPF, DKIM records di domain DNS</p>
                  </div>
                  <div>
                    <strong className="text-red-600">Rate limiting</strong>
                    <p className="text-gray-600">→ Gmail limit 500 email/hari, gunakan SendGrid untuk volume tinggi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="mb-12">
          <Card className="border-0 shadow-lg bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Security Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Environment Variables</h4>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• Jangan hardcode credentials di kode</li>
                    <li>• Gunakan .env.local untuk development</li>
                    <li>• Set environment variables di production server</li>
                    <li>• Tambahkan .env* ke .gitignore</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Email Security</h4>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• Gunakan App Password untuk Gmail</li>
                    <li>• Enable 2FA pada email account</li>
                    <li>• Validasi input untuk mencegah injection</li>
                    <li>• Rate limiting untuk mencegah spam</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Production Deployment */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Server className="h-8 w-8 text-[#2e5844] mr-3" />
            Deployment ke Production
          </h2>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#2e5844]">Vercel Deployment</CardTitle>
              <CardDescription>Setting environment variables di Vercel dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="bg-[#2e5844] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong>Buka Vercel Dashboard</strong>
                      <p className="text-gray-600">Login ke vercel.com dan pilih project Anda</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#2e5844] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong>Settings → Environment Variables</strong>
                      <p className="text-gray-600">Tambahkan semua SMTP environment variables</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#2e5844] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong>Redeploy Project</strong>
                      <p className="text-gray-600">Trigger new deployment agar environment variables aktif</p>
                    </div>
                  </li>
                </ol>

                <Alert className="mt-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Penting:</strong> Setelah menambahkan environment variables, Anda harus redeploy project
                    agar perubahan berlaku.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
