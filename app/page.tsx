import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Zap,
  Code2,
  Settings,
  Monitor,
  Sparkles,
  BookOpen,
  Download,
  Github,
  Terminal,
  Apple,
  Package,
} from "lucide-react"
import Link from "next/link"
import { OggyLogo } from "@/components/oggy-logo" // Declare the OggyLogo variable

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            The Smart Command Line Interface for <span className="text-primary">Modern Developers</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Streamline your development workflow with powerful automation tools and intelligent command execution
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="#download">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/docs">View Documentation</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8">
              <a href="https://github.com/krishvsoni/oggy" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Oggy CLI?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Fast</h3>
            <p className="text-muted-foreground leading-relaxed">
              Execute commands with blazing speed and optimized performance
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Developer Friendly</h3>
            <p className="text-muted-foreground leading-relaxed">
              Intuitive commands designed for modern development workflows
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Highly Configurable</h3>
            <p className="text-muted-foreground leading-relaxed">Customize Oggy to fit your specific project needs</p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cross Platform</h3>
            <p className="text-muted-foreground leading-relaxed">Works smoothly on Windows, macOS, and Linux</p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Automation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Intelligent command suggestions and automated task execution
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Documentation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive guides and examples to get you started quickly
            </p>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Download Oggy CLI</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Windows */}
          <Card className="p-8 space-y-6 bg-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Windows</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Installer</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-installer.exe">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-installer.exe
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Portable</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy.exe">
                    <Download className="w-4 h-4 mr-2" />
                    oggy.exe
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Quick Install</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/raw/main/install.bat">
                    <Download className="w-4 h-4 mr-2" />
                    install.bat
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* macOS */}
          <Card className="p-8 space-y-6 bg-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Apple className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">macOS</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Homebrew</p>
                <div className="bg-secondary p-3 rounded-md">
                  <code className="text-sm font-mono">brew install oggy-cli</code>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Direct Download</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-macos">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-macos
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Linux */}
          <Card className="p-8 space-y-6 bg-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Linux</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Package Manager</p>
                <div className="bg-secondary p-3 rounded-md">
                  <code className="text-sm font-mono">sudo apt install oggy-cli</code>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Direct Download</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-linux">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-linux
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Platform Support */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-6 bg-card">
            <h4 className="text-lg font-bold mb-4">Platform Support</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span>
                <span>Windows 10/11 (x64)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span>
                <span>macOS 10.15+ (Intel & Apple Silicon)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span>
                <span>Ubuntu 18.04+ / Debian 10+</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span>
                <span>CentOS 7+ / RHEL 7+</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span>
                <span>Arch Linux</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <OggyLogo />
            </div>

            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <a
                href="https://github.com/krishvsoni/oggy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Oggy CLI. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
