import { Instagram, Music2, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      {/* Subtle Neon Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="h-10 w-auto flex items-center">
                <img
                  src="/logo.png"
                  alt="PulseVibe Logo"
                  className="max-h-32 object-contain"
                  style={{ transform: 'scale(1.5)', transition: 'transform 0.3s ease' }}
                />
              </div>
              <p className="text-sm text-muted-foreground">© 2025 Pulse Vibe — Todos os direitos reservados.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-12 h-12 rounded-full bg-card border-2 border-border hover:border-accent flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </Link>
            {/* <Link
              href="https://tiktok.com"
              target="_blank"
              className="w-12 h-12 rounded-full bg-card border-2 border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Music2 className="w-5 h-5 text-primary" />
            </Link> */}
            <Link
              href="https://wa.me/5545998103872"
              target="_blank"
              className="w-12 h-12 rounded-full bg-card border-2 border-border hover:border-secondary flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-secondary/50"
            >
              <MessageCircle className="w-5 h-5 text-secondary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
