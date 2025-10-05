import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Terminal, Download, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to get started with Oggy CLI
            </p>
          </div>

          {/* Getting Started */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Download className="w-5 h-5 text-primary" />
              </div>
              Getting Started
            </h2>

            <Card className="p-8 space-y-6 bg-card">
              <div>
                <h3 className="text-xl font-bold mb-3">Installation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Choose your platform and follow the installation guide on the{" "}
                  <Link href="/#download" className="text-primary hover:underline">
                    home page
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">First Steps</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  After installation, verify that Oggy is working correctly:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Verify installation</p>
                    <div className="bg-secondary p-4 rounded-lg border border-border">
                      <code className="text-sm font-mono text-foreground">oggy --version</code>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Initialize a new project</p>
                    <div className="bg-secondary p-4 rounded-lg border border-border">
                      <code className="text-sm font-mono text-foreground">oggy init my-project</code>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Get help</p>
                    <div className="bg-secondary p-4 rounded-lg border border-border">
                      <code className="text-sm font-mono text-foreground">oggy --help</code>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Basic Commands */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              Basic Commands
            </h2>

            <Card className="p-8 space-y-6 bg-card">
              <div>
                <h3 className="text-xl font-bold mb-3">Core Commands</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <code className="text-primary font-mono font-bold">oggy init [project-name]</code>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Initialize a new project with Oggy configuration
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <code className="text-primary font-mono font-bold">oggy run [command]</code>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Execute a command with Oggy's smart automation
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <code className="text-primary font-mono font-bold">oggy config</code>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      View and modify Oggy configuration settings
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <code className="text-primary font-mono font-bold">oggy update</code>
                    <p className="text-muted-foreground mt-2 leading-relaxed">Update Oggy to the latest version</p>
                  </div>
                </div>
              </div>
            </Card>
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
                <h3 className="text-xl font-bold mb-3">Configuration File</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Oggy uses a <code className="text-primary font-mono">oggy.config.json</code> file in your project root
                  for configuration.
                </p>

                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <pre className="text-sm font-mono text-foreground overflow-x-auto">
                    {`{
  "version": "1.0.0",
  "automation": {
    "enabled": true,
    "suggestions": true
  },
  "performance": {
    "cache": true,
    "parallel": true
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Environment Variables</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customize Oggy's behavior using environment variables:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <code className="text-primary font-mono">OGGY_DEBUG</code> - Enable debug mode
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <code className="text-primary font-mono">OGGY_CACHE_DIR</code> - Set custom cache directory
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <code className="text-primary font-mono">OGGY_NO_COLOR</code> - Disable colored output
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* Need Help */}
          <section>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you encounter any issues or have questions, check out our GitHub repository or open an issue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/krishvsoni/oggy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Visit GitHub
                </a>
                <a
                  href="https://github.com/krishvsoni/oggy/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                >
                  Report an Issue
                </a>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
