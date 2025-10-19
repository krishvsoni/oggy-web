'use client';

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
    <div className="min-h-screen bg-background font-[family-name:var(--font-indie-flower)]">
      <Header />

      <section className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 md:mb-8">
            <Image src={hero} alt="Hero Image" className="w-full h-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance px-2">
           push safe commits with oggy
          </h1>
         
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6">
            <Badge variant="secondary" className="px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base lg:text-lg font-bold">
              Enterprise Grade
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base lg:text-lg font-bold">
              Multi-Language
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base lg:text-lg font-bold">
              Production Ready
            </Badge>
          </div>



         

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 px-4">
            <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
              <Link href="#download">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 bg-transparent w-full sm:w-auto">
              <Link href="/docs">View Documentation</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
              <a href="https://github.com/krishvsoni/oggy" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">

        <Card className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <div className="text-center space-y-3 md:space-y-4">
            <Badge className="bg-primary text-primary-foreground text-xs md:text-sm">
              What's New in v2.0
              
            </Badge>
                    <Image 
          src="/oggy-2.png" 
          alt="What's New in v2.0" 
          width={200} 
          height={400} 
          className="mx-auto mb-4 md:mb-6" 
        />
            <h2 className="text-2xl md:text-3xl font-bold px-2">Major Update: From Commit Tool to Enterprise Platform</h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Oggy  has evolved into a comprehensive code analysis platform with codebase-wide analysis, 
              remote repository scanning, production readiness checks.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                <span>Whole Codebase Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                <span>Remote Repository Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                <span>Production Security Checks</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                <span>Multi-Language Support</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 px-2">Enterprise-Grade Code Analysis</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          
          <Card className="p-4 md:p-6 space-y-3 md:space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileSearch className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Whole Codebase Analysis</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Analyze entire repositories with <code className="bg-secondary px-1 rounded text-xs md:text-sm" style={{ fontFamily: "monospace" }}>--whole-codebase</code> flag. 
              Get comprehensive insights across all files and directories.
            </p>
          </Card>

          <Card className="p-4 md:p-6 space-y-3 md:space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <GitBranch className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Remote Repository Support</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Analyze any GitHub repository remotely with <code className="bg-secondary px-1 rounded text-xs md:text-sm" style={{ fontFamily: "monospace" }}>--git-url</code>. 
              No need to clone locally.
            </p>
          </Card>

          <Card className="p-4 md:p-6 space-y-3 md:space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Production Security Checks</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Enterprise-grade security scanning for SQL injection, XSS, hardcoded secrets, 
              and deployment vulnerabilities.
            </p>
          </Card>

          <Card className="p-4 md:p-6 space-y-3 md:space-y-4 bg-card hover:bg-card/80 transition-colors">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TestTube className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">E2E Testing Analysis</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Comprehensive testing insights with <code className="bg-secondary px-1 rounded text-xs md:text-sm" style={{ fontFamily: "monospace" }}>--e2e-tests</code>. 
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
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy analyze --whole-codebase</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Remote Repository Analysis</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy analyze --git-url https://github.com/user/repo.git</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Production Security Checks</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy analyze --production</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">E2E Testing Analysis</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy analyze --e2e-tests</code>
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
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy init</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Production Setup</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy init --production</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Specific Framework</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy init --language typescript --framework react</code>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Export Analysis Report</p>
                  <div className="bg-secondary p-3 rounded-md">
                    <code className="text-sm font-mono" style={{ fontFamily: "monospace" }}>oggy analyze --output report.md</code>
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

      <section id="download" className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Download Oggy CLI v2.0</h2>
        
        <div className="text-center mb-8 md:mb-12">
          <Badge className="bg-green-600 text-white mb-4">
            <CheckCircle className="w-3 h-3 mr-1" />
            Latest Release: v2.0.0
          </Badge>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Download native binaries with optimized performance for all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Windows */}
          <Card className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background border-2 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Windows</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs md:text-sm h-9 md:h-10">
                <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy.exe">
                  <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  oggy.exe (x64)
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs md:text-sm h-9 md:h-10">
                <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-installer.exe">
                  <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Installer Package
                </a>
              </Button>
            </div>
          </Card>

          {/* macOS */}
          <Card className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-950/20 dark:to-background border-2 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Apple className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">macOS</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs md:text-sm h-9 md:h-10">
                <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-macos">
                  <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Intel (x64)
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs md:text-sm h-9 md:h-10">
                <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-macos-arm64">
                  <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Apple Silicon (M1/M2/M3)
                </a>
              </Button>
            </div>
          </Card>

          {/* Linux */}
          <Card className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 bg-gradient-to-br from-green-50/50 to-white dark:from-green-950/20 dark:to-background border-2 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Linux</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs md:text-sm h-9 md:h-10">
                <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-linux">
                  <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Linux x64
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs md:text-sm h-9 md:h-10">
                <a href="https://github.com/krishvsoni/oggy/releases/latest/download/oggy-linux-arm64">
                  <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Linux ARM64
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Enhanced Platform Support */}
        <div className="mt-8 md:mt-12 lg:mt-16 max-w-7xl mx-auto">
          <Card className="p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background border-2">
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Complete Platform Coverage</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span>Windows 10/11 (x64)</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span>macOS 10.15+ (Intel)</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span>macOS 11+ (Apple Silicon)</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span>Ubuntu 18.04+ / Debian 10+</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span>CentOS 7+ / RHEL 7+</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span>Arch Linux / Fedora</span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h5 className="font-bold mb-3 text-sm md:text-base">After Installation</h5>
              <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                  <span>Run <code className="bg-secondary px-1 rounded" style={{ fontFamily: "monospace" }}>oggy setup</code> for interactive configuration</span>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                  <span>Initialize your project with <code className="bg-secondary px-1 rounded" style={{ fontFamily: "monospace" }}>oggy init</code></span>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                  <span>Add your <code className="bg-secondary px-1 rounded" style={{ fontFamily: "monospace" }}>GROQ_API_KEY</code> after <code className="bg-secondary px-1 rounded" style={{ fontFamily: "monospace" }}>oggy init</code></span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                <Image src="oggy-and-the-cockroaches-oggy-fly-swatter-custom-cursor.png" alt="Oggy Logo" width={125} height={82} />
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

          <div className="mt-8 text-center font-bold text-sm text-muted-foreground">
            <p>© 2025 Oggy CLI. Enterprise-grade code analysis for modern development teams.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}