import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Image src="/navlogo.svg" alt="Oggy Logo" width={74} height={62} />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Download
          </Link>
          <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </Link>
          <a
            href="https://github.com/krishvsoni/oggy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden sm:flex bg-transparent">
            <Link href="/docs">Docs</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/#download">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
