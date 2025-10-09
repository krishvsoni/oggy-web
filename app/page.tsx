import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import hero from "@/public/hero.svg"
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
  Shield,
  Globe,
  TestTube,
  FileSearch,
  GitBranch,
  Database,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Copy,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-full max-w-md mx-auto mb-8">
            <Image src={hero} alt="Hero Image" className="w-full h-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              <Star className="w-3 h-3 mr-1" />
              Enterprise Grade
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Globe className="w-3 h-3 mr-1" />
              Multi-Language
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Shield className="w-3 h-3 mr-1" />
              Production Ready
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Enterprise Code Analysis & Commit Intelligence
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            From simple commit analysis to comprehensive codebase auditing. Analyze entire repositories, remote codebases, and production-ready deployments with AI-powered insights across 15+ languages and 30+ frameworks.
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

          {/* Quick Install Commands */}
          <div className="mt-12 space-y-4">
            <h3 className="text-lg font-semibold">Quick Install</h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Card className="p-4 bg-card/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Windows (PowerShell)</p>
                    <code className="text-xs font-mono">iwr "...Install-Oggy.ps1" | iex</code>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
              <Card className="p-4 bg-card/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Linux/macOS</p>
                    <code className="text-xs font-mono">curl -sSL install.sh | bash</code>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Banner */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <div className="text-center space-y-4">
            <Badge className="bg-primary text-primary-foreground">
              <Sparkles className="w-3 h-3 mr-1" />
              What's New in v2.0
            </Badge>
            <h2 className="text-3xl font-bold">Major Update: From Commit Tool to Enterprise Platform</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oggy CLI has evolved into a comprehensive code analysis platform with codebase-wide analysis, 
              remote repository scanning, production readiness checks, and support for 15+ programming languages.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Whole Codebase Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Remote Repository Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Production Security Checks</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Multi-Language Support</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Enterprise-Grade Code Analysis</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileSearch className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Whole Codebase Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyze entire repositories with <code className="bg-secondary px-1 rounded">--whole-codebase</code> flag. 
              Get comprehensive insights across all files and directories.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Remote Repository Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyze any GitHub repository remotely with <code className="bg-secondary px-1 rounded">--git-url</code>. 
              No need to clone locally.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Production Security Checks</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enterprise-grade security scanning for SQL injection, XSS, hardcoded secrets, 
              and deployment vulnerabilities.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TestTube className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">E2E Testing Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive testing insights with <code className="bg-secondary px-1 rounded">--e2e-tests</code>. 
              Supports Jest, Cypress, Playwright, PyTest, and more.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">15+ Languages & 30+ Frameworks</h3>
            <p className="text-muted-foreground leading-relaxed">
              TypeScript, Python, Java, Go, Rust, C++, React, Django, Spring, 
              Next.js, and many more with intelligent framework detection.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Performance Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detect async patterns, memory optimization opportunities, 
              and performance anti-patterns with detailed reporting.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cross Platform Native</h3>
            <p className="text-muted-foreground leading-relaxed">
              Native binaries for Windows, macOS (Intel & Apple Silicon), 
              and Linux (x64 & ARM64) with optimized performance.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Auto-Detection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Completely rewritten <code className="bg-secondary px-1 rounded">oggy init</code> 
              auto-detects languages and frameworks for optimal configuration.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Detailed File Reports</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enhanced error reporting with exact file names and line numbers. 
              Export reports with <code className="bg-secondary px-1 rounded">--output</code>.
            </p>
          </Card>
        </div>
      </section>

      {/* Command Examples Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Powerful Commands at Your Fingertips</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Analysis Commands */}
            <Card className="p-8 space-y-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Enhanced Analysis</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Whole Codebase Analysis</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy analyze --whole-codebase</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Remote Repository Analysis</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy analyze --git-url https://github.com/user/repo.git</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Production Security Checks</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy analyze --production</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">E2E Testing Analysis</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy analyze --e2e-tests</code>
                  </div>
                </div>
              </div>
            </Card>

            {/* Setup Commands */}
            <Card className="p-8 space-y-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Smart Initialization</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Auto-Detect & Configure</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy init</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Production Setup</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy init --production</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Specific Framework</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy init --language typescript --framework react</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Export Analysis Report</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono">oggy analyze --output report.md</code>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Technologies */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Supports Your Tech Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 bg-card">
              <h3 className="text-lg font-bold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin'].map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">{lang}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 space-y-4 bg-card">
              <h3 className="text-lg font-bold">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue', 'Angular', 'Next.js', 'Nuxt', 'Svelte', 'Solid', 'Astro'].map((fw) => (
                  <Badge key={fw} variant="secondary" className="text-xs">{fw}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 space-y-4 bg-card">
              <h3 className="text-lg font-bold">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Express', 'NestJS', 'Django', 'Flask', 'FastAPI', 'Spring', 'Gin', 'Actix'].map((fw) => (
                  <Badge key={fw} variant="secondary" className="text-xs">{fw}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 space-y-4 bg-card">
              <h3 className="text-lg font-bold">Testing</h3>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'Cypress', 'Playwright', 'PyTest', 'JUnit', 'RSpec', 'Mocha', 'Vitest'].map((test) => (
                  <Badge key={test} variant="secondary" className="text-xs">{test}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Download Section */}
      <section id="download" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Download Oggy CLI v2.0</h2>
        
        <div className="text-center mb-12">
          <Badge className="bg-green-600 text-white mb-4">
            <CheckCircle className="w-3 h-3 mr-1" />
            Latest Release: v2.0.0
          </Badge>
          <p className="text-lg text-muted-foreground">
            One-liner installation scripts for all platforms. Native binaries with optimized performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Windows */}
          <Card className="p-8 space-y-6 bg-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Windows</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">One-Line Install (PowerShell)</p>
                <div className="bg-secondary p-3 rounded-md">
                  <code className="text-xs font-mono break-all">
                    iwr "https://raw.githubusercontent.com/krishvsoni/oggy/main/Install-Oggy.ps1" -OutFile "Install-Oggy.ps1"; .\Install-Oggy.ps1
                  </code>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Direct Download (x64)</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy.exe">
                    <Download className="w-4 h-4 mr-2" />
                    oggy.exe
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Installer Package</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-installer.exe">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-installer.exe
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

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">One-Line Install</p>
                <div className="bg-secondary p-3 rounded-md">
                  <code className="text-xs font-mono">
                    curl -sSL https://raw.githubusercontent.com/krishvsoni/oggy/main/install.sh | bash
                  </code>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Intel Macs</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-macos">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-macos (Intel)
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Apple Silicon (M1/M2/M3)</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-macos-arm64">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-macos-arm64
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

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">One-Line Install</p>
                <div className="bg-secondary p-3 rounded-md">
                  <code className="text-xs font-mono">
                    curl -sSL https://raw.githubusercontent.com/krishvsoni/oggy/main/install.sh | bash
                  </code>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">x64 Architecture</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-linux">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-linux (x64)
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">ARM64 Architecture</p>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-linux-arm64">
                    <Download className="w-4 h-4 mr-2" />
                    oggy-linux-arm64
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Platform Support */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-card">
            <h4 className="text-2xl font-bold mb-6 text-center">Complete Platform Coverage</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Windows 10/11 (x64)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>macOS 10.15+ (Intel)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>macOS 11+ (Apple Silicon)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Ubuntu 18.04+ / Debian 10+</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>CentOS 7+ / RHEL 7+</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Arch Linux / Fedora</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h5 className="font-bold mb-3">After Installation</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Run <code className="bg-secondary px-1 rounded">oggy setup</code> for interactive configuration</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Add your <code className="bg-secondary px-1 rounded">GROQ_API_KEY</code> to <code className="bg-secondary px-1 rounded">.env</code></span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Initialize your project with <code className="bg-secondary px-1 rounded">oggy init</code></span>
                </div>
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
              <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                <Image src="/navlogo.svg" alt="Oggy Logo" width={95} height={62} />
              </Link>   
              <div className="font-extrabold text-4xl"> oggy-cli 
                <Badge className="ml-2 text-xs">v2.0</Badge>
              </div>       
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
              <a
                href="https://github.com/krishvsoni/oggy/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Releases
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Oggy CLI. Enterprise-grade code analysis for modern development teams.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}