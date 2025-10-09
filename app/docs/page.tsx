import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Terminal, 
  Download, 
  HelpCircle, 
  FileSearch, 
  GitBranch, 
  Shield, 
  TestTube, 
  Settings, 
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Code2,
  Database,
  Sparkles
} from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-5xl font-bold">Documentation</h1>
              <Badge className="bg-green-600 text-white">
                v2.0
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete guide to Oggy CLI v2.0 - From simple commits to enterprise-grade code analysis
            </p>
          </div>

          {/* What's New */}
          <section className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">What's New in v2.0</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Oggy CLI has evolved from a commit analysis tool to a comprehensive enterprise-grade code analysis platform.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Whole codebase analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Remote repository scanning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Production security checks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>15+ languages & 30+ frameworks</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Quick Start */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              Quick Start
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">1. Install</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Windows (PowerShell)</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-xs font-mono break-all">
                        iwr "...Install-Oggy.ps1" | iex
                      </code>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Linux/macOS</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-xs font-mono">
                        curl -sSL install.sh | bash
                      </code>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">2. Setup & Initialize</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Interactive setup</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-sm font-mono">oggy setup</code>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Auto-detect project</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-sm font-mono">oggy init</code>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Enhanced Commands */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              Enhanced Commands
            </h2>

            <div className="space-y-6">
              {/* Analysis Commands */}
              <Card className="p-8 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <FileSearch className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Analysis Commands</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="border-l-4 border-primary pl-4 mb-3">
                      <code className="text-primary font-mono font-bold text-lg">oggy analyze</code>
                      <p className="text-muted-foreground mt-1">Standard commit-based analysis</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-blue-500 pl-4 mb-3">
                      <code className="text-blue-600 font-mono font-bold text-lg">oggy analyze --whole-codebase</code>
                      <p className="text-muted-foreground mt-1">Analyze entire repository structure and all files</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-green-500 pl-4 mb-3">
                      <code className="text-green-600 font-mono font-bold text-lg">oggy analyze --git-url https://github.com/user/repo.git</code>
                      <p className="text-muted-foreground mt-1">Analyze remote repositories without cloning</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-red-500 pl-4 mb-3">
                      <code className="text-red-600 font-mono font-bold text-lg">oggy analyze --production</code>
                      <p className="text-muted-foreground mt-1">Enterprise security and production readiness checks</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-purple-500 pl-4 mb-3">
                      <code className="text-purple-600 font-mono font-bold text-lg">oggy analyze --e2e-tests</code>
                      <p className="text-muted-foreground mt-1">Comprehensive end-to-end testing analysis</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-orange-500 pl-4 mb-3">
                      <code className="text-orange-600 font-mono font-bold text-lg">oggy analyze --output report.md</code>
                      <p className="text-muted-foreground mt-1">Export detailed analysis reports</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Initialization Commands */}
              <Card className="p-8 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Smart Initialization</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="border-l-4 border-primary pl-4 mb-3">
                      <code className="text-primary font-mono font-bold text-lg">oggy init</code>
                      <p className="text-muted-foreground mt-1">Auto-detect project type and generate optimal configuration</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-blue-500 pl-4 mb-3">
                      <code className="text-blue-600 font-mono font-bold text-lg">oggy init --production</code>
                      <p className="text-muted-foreground mt-1">Production-optimized configuration with security focus</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-green-500 pl-4 mb-3">
                      <code className="text-green-600 font-mono font-bold text-lg">oggy init --language typescript --framework react</code>
                      <p className="text-muted-foreground mt-1">Specific language and framework configuration</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-l-4 border-purple-500 pl-4 mb-3">
                      <code className="text-purple-600 font-mono font-bold text-lg">oggy setup</code>
                      <p className="text-muted-foreground mt-1">Interactive configuration wizard</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Supported Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              Supported Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'Rust', 
                    'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'Dart', 'Solidity'
                  ].map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs">{lang}</Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Frontend Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'Vue', 'Angular', 'Next.js', 'Nuxt', 'Svelte', 
                    'Solid', 'Astro', 'Remix', 'Vite'
                  ].map((fw) => (
                    <Badge key={fw} variant="secondary" className="text-xs">{fw}</Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Backend Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Express', 'NestJS', 'Django', 'Flask', 'FastAPI', 'Spring', 
                    'Gin', 'Actix', 'Rails', 'Laravel'
                  ].map((fw) => (
                    <Badge key={fw} variant="secondary" className="text-xs">{fw}</Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Testing Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Jest', 'Cypress', 'Playwright', 'PyTest', 'JUnit', 'RSpec', 
                    'Mocha', 'Vitest', 'TestCafe', 'Selenium'
                  ].map((test) => (
                    <Badge key={test} variant="secondary" className="text-xs">{test}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Production Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              Production-Ready Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Security Analysis</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    SQL injection vulnerability detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    XSS (Cross-Site Scripting) analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hardcoded secrets and API keys detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Authentication and authorization checks
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Performance Analysis</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Async/await pattern optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Memory usage and leak detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Database query optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Bundle size and loading performance
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Code Quality</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Error handling best practices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Code maintainability analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Anti-pattern detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Dependency vulnerability scanning
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-bold">Deployment Analysis</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Environment configuration validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Docker and containerization checks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    CI/CD pipeline optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Production readiness assessment
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Configuration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              Configuration
            </h2>

            <Card className="p-8 space-y-6 bg-card">
              <div>
                <h3 className="text-xl font-bold mb-3">Environment Setup</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Oggy v2.0 uses a <code className="text-primary font-mono">.env</code> file for API configuration:
                </p>

                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <pre className="text-sm font-mono text-foreground overflow-x-auto">
{`# .env file
GROQ_API_KEY=your_groq_api_key_here

# Optional: Model selection
OGGY_MODEL=llama-3.3-70b-versatile

# Optional: Custom output directory
OGGY_OUTPUT_DIR=./oggy-reports`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Project Configuration</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Auto-generated <code className="text-primary font-mono">oggy.config.yaml</code> based on your project:
                </p>

                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <pre className="text-sm font-mono text-foreground overflow-x-auto">
{`# oggy.config.yaml
project:
  name: "my-awesome-project"
  language: "typescript"
  framework: "react"
  
analysis:
  focus_areas:
    - security
    - performance
    - testing
    - maintainability
  
  production:
    enabled: true
    security_level: "strict"
    
  e2e_testing:
    frameworks: ["cypress", "playwright"]
    
output:
  format: "markdown"
  include_line_numbers: true
  detailed_reports: true`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Ignore Patterns</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Use <code className="text-primary font-mono">.oggyignore</code> to exclude files from analysis:
                </p>

                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <pre className="text-sm font-mono text-foreground overflow-x-auto">
{`# .oggyignore
node_modules/
dist/
build/
*.log
.env.local
coverage/
.next/
*.min.js`}
                  </pre>
                </div>
              </div>
            </Card>
          </section>

          {/* Cross-Platform Installation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Download className="w-5 h-5 text-primary" />
              </div>
              Cross-Platform Installation
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-lg font-bold">Windows</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">PowerShell (Recommended)</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-xs font-mono break-all">
                        iwr "...Install-Oggy.ps1" | iex
                      </code>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    Windows 10/11 (x64)
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-lg font-bold">macOS</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Terminal</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-xs font-mono">
                        curl -sSL install.sh | bash
                      </code>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Intel Macs (x64)
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Apple Silicon (ARM64)
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-lg font-bold">Linux</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Terminal</p>
                    <div className="bg-secondary p-3 rounded-md">
                      <code className="text-xs font-mono">
                        curl -sSL install.sh | bash
                      </code>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Ubuntu/Debian (x64)
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      ARM64 Support
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Help & Support */}
          <section>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Oggy CLI v2.0 is a major update with many new features. If you encounter any issues, 
                have questions, or want to contribute, we're here to help.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <a
                  href="https://github.com/krishvsoni/oggy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                >
                  <GitBranch className="w-4 h-4 mr-2" />
                  GitHub Repo
                </a>
                <a
                  href="https://github.com/krishvsoni/oggy/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Report Issue
                </a>
                <a
                  href="https://github.com/krishvsoni/oggy/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Releases
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Back Home
                </Link>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
