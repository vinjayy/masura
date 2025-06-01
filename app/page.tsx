"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  Leaf,
  Flame,
  Award,
  Users,
  Globe,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-[#f1eee9]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.jpeg?height=32&width=32"
                  alt="Masura Indo Perkasa Logo"
                  width={54}
                  height={54}
                  className="rounded"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#2e5844]">PT Masura Indo Perkasa</h1>
                <p className="text-sm text-gray-600">Natural Products Excellence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-[#2e5844] transition-colors">
                Tentang
              </a>
              <a href="#products" className="text-gray-700 hover:text-[#2e5844] transition-colors">
                Produk
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-[#2e5844] transition-colors">
                Galeri
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#2e5844] transition-colors">
                Kontak
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-[#2e5844] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tentang
                </a>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-[#2e5844] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Produk
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-[#2e5844] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galeri
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#2e5844] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontak
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#2e5844] hover:bg-[#2e5844]/90">Produsen Hasil Alam Terpercaya</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kualitas Terbaik dari
                <span className="text-[#2e5844]"> Alam Indonesia</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                PT Masura Indo Perkasa adalah perusahaan terdepan dalam produksi briket arang berkualitas tinggi,
                rempah-rempah pilihan, dan tembakau cerutu premium. Kami berkomitmen menghadirkan produk alami terbaik
                dari kekayaan alam Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#2e5844] hover:bg-[#2e5844]/90 text-white">
                  Lihat Produk Kami
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#2e5844] text-[#2e5844] hover:bg-[#2e5844] hover:text-white"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero1.jpg?height=500&width=600"
                alt="Produk Masura Indo Perkasa"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-[#2e5844]" />
                  <div>
                    <p className="font-semibold text-gray-900">Sertifikat ISO</p>
                    <p className="text-sm text-gray-600">Kualitas Terjamin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang PT Masura Indo Perkasa</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengan pengalaman bertahun-tahun, kami telah menjadi mitra terpercaya dalam menyediakan produk-produk
              alami berkualitas tinggi untuk pasar domestik dan internasional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#2e5844] mx-auto mb-4" />
                <CardTitle className="text-[#2e5844]">Tim Berpengalaman</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tim ahli dengan pengalaman puluhan tahun dalam industri hasil alam</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Factory className="h-12 w-12 text-[#2e5844] mx-auto mb-4" />
                <CardTitle className="text-[#2e5844]">Fasilitas Modern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pabrik dengan teknologi terkini untuk menjamin kualitas produk terbaik</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-[#2e5844] mx-auto mb-4" />
                <CardTitle className="text-[#2e5844]">Jangkauan Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Melayani pasar domestik dan ekspor ke berbagai negara di dunia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan Kami</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tiga lini produk utama yang menjadi keunggulan PT Masura Indo Perkasa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Briket Arang */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image src="/hero2.jpg?height=256&width=400" alt="Briket Arang" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#2e5844] hover:bg-[#2e5844]/90">
                    <Flame className="w-3 h-3 mr-1" />
                    Briket Arang
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#2e5844]">Produksi Briket Arang</CardTitle>
                <CardDescription>Briket arang berkualitas tinggi dari bahan baku pilihan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Daya bakar tinggi dan tahan lama</li>
                  <li>• Ramah lingkungan dan bebas asap</li>
                  <li>• Tersedia berbagai ukuran sesuai kebutuhan</li>
                  <li>• Cocok untuk BBQ, industri, dan rumah tangga</li>
                </ul>
              </CardContent>
            </Card>

            {/* Rempah-rempah */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image src="/hero3.jpg?height=256&width=400" alt="Rempah-rempah" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#2e5844] hover:bg-[#2e5844]/90">
                    <Leaf className="w-3 h-3 mr-1" />
                    Rempah-rempah
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#2e5844]">Produsen Rempah-rempah</CardTitle>
                <CardDescription>Rempah-rempah asli Indonesia dengan kualitas ekspor</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lada hitam dan putih premium</li>
                  <li>• Cengkeh, pala, dan kayu manis</li>
                  <li>• Proses pengolahan higienis dan modern</li>
                  <li>• Kemasan sesuai standar internasional</li>
                </ul>
              </CardContent>
            </Card>

            {/* Tembakau Cerutu */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/hero4.jpg?height=256&width=400"
                  alt="Tembakau Cerutu"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#2e5844] hover:bg-[#2e5844]/90">
                    <Factory className="w-3 h-3 mr-1" />
                    Tembakau Cerutu
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#2e5844]">Produsen Tembakau Cerutu</CardTitle>
                <CardDescription>Tembakau cerutu premium dari perkebunan terbaik</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Daun tembakau pilihan berkualitas tinggi</li>
                  <li>• Proses fermentasi tradisional</li>
                  <li>• Aroma dan rasa yang khas</li>
                  <li>• Standar kualitas internasional</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Produk</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat koleksi produk berkualitas tinggi dari PT Masura Indo Perkasa
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gallery1.jpg?height=400&width=1200"
                alt="Fasilitas Produksi Masura Indo Perkasa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-2xl md:text-4xl font-bold mb-2">Fasilitas Produksi Modern</h4>
                  <p className="text-lg md:text-xl">Teknologi terdepan untuk kualitas terbaik</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {/* Briket Arang Gallery */}
            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Briket Arang Premium"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Briket Arang
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Proses Produksi Briket"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Proses Produksi
                  </Badge>
                </div>
              </div>
            </div>

            {/* Rempah-rempah Gallery */}
            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Rempah-rempah Premium"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Rempah Premium
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Kemasan Rempah Export"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Kemasan Export
                  </Badge>
                </div>
              </div>
            </div>

            {/* Tembakau Cerutu Gallery */}
            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Daun Tembakau Premium"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Daun Tembakau
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Proses Fermentasi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Fermentasi
                  </Badge>
                </div>
              </div>
            </div>

            {/* Fasilitas Gallery */}
            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Gudang Penyimpanan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Gudang Modern
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Quality Control"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Badge className="bg-[#2e5844] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quality Control
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2e5844] mb-2">500+</div>
              <p className="text-gray-600">Ton Produksi/Bulan</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2e5844] mb-2">15+</div>
              <p className="text-gray-600">Negara Ekspor</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2e5844] mb-2">10+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2e5844] mb-2">100+</div>
              <p className="text-gray-600">Klien Puas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Siap melayani kebutuhan produk alami berkualitas tinggi untuk bisnis Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-[#2e5844] mb-6">PT Masura Indo Perkasa</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#2e5844] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Alamat Kantor</h5>
                    <p className="text-gray-600">
                      Jl. Industri Raya No. 123
                      <br />
                      Kawasan Industri Terpadu
                      <br />
                      Jakarta Timur 13920, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#2e5844] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Telepon</h5>
                    <p className="text-gray-600">+62 21 8765 4321</p>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#2e5844] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Email</h5>
                    <p className="text-gray-600">info@masuraindoperkasa.com</p>
                    <p className="text-gray-600">sales@masuraindoperkasa.com</p>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Jam Operasional</h5>
                <div className="space-y-2 text-gray-600">
                  <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                  <p>Sabtu: 08:00 - 12:00 WIB</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#2e5844]">Kirim Pesan</CardTitle>
                <CardDescription>Hubungi kami untuk informasi lebih lanjut tentang produk kami</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5844] focus:border-transparent"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Perusahaan</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5844] focus:border-transparent"
                      placeholder="Nama Perusahaan"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5844] focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Produk yang Diminati</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5844] focus:border-transparent">
                    <option>Pilih Produk</option>
                    <option>Briket Arang</option>
                    <option>Rempah-rempah</option>
                    <option>Tembakau Cerutu</option>
                    <option>Semua Produk</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5844] focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#2e5844] hover:bg-[#2e5844]/90 text-white">Kirim Pesan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e5844] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center">
                  <Image src="/logo.jpeg?height=24&width=24" alt="Logo" width={46} height={46} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">PT Masura Indo Perkasa</h4>
                  <p className="text-green-200">Natural Products Excellence</p>
                </div>
              </div>
              <p className="text-green-100 mb-4">
                Perusahaan terdepan dalam produksi briket arang, rempah-rempah, dan tembakau cerutu berkualitas tinggi
                dari Indonesia.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Produk Kami</h5>
              <ul className="space-y-2 text-green-100">
                <li>Briket Arang</li>
                <li>Rempah-rempah</li>
                <li>Tembakau Cerutu</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Kontak</h5>
              <ul className="space-y-2 text-green-100">
                <li>+62 21 8765 4321</li>
                <li>info@masuraindoperkasa.com</li>
                <li>Jakarta Timur, Indonesia</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-green-600" />

          <div className="text-center text-green-100">
            <p>&copy; 2024 PT Masura Indo Perkasa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          <span className="hidden sm:inline font-medium">Hubungi Kami</span>
          <span className="sm:hidden font-medium">Chat</span>
        </a>
      </div>
    </div>
  )
}
