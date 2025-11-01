import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
export default function Footer() {
    return(
        <>
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
              <Link href="/docs" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <a
                href="https://github.com/krishvsoni/oggy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://github.com/krishvsoni/oggy/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                Releases
              </a>
            </div>
          </div>

          <div className="mt-8 text-center font-bold text-md text-muted-foreground">
            <p>© oggy-cli {new Date().getFullYear()}  OSS tool for analyzing commits</p>
          </div>
        </div>
      </footer>
    </>
    )
}