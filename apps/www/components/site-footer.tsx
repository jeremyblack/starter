import { siteConfig } from "@/config/site"
import Link from "next/link"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="mt-12 w-full border-t py-6 md:px-8 md:py-0">
      <div className="container flex">
        <div className="grid grid-cols-6 gap-4 py-12 md:grid-cols-1 lg:grid-cols-6 lg:gap-8">
          <div className="flex items-start justify-start">jeremy</div>
          <div className="flex"></div>
          <div className="flex items-start justify-start">
            <ul className="list-none"> 
              <li>Heading</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="flex items-start justify-start">
            <ul className="list-none"> 
              <li>Heading</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="flex items-start justify-start">
            <ul className="list-none"> 
              <li>Heading</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="flex items-start justify-start">
            <ul className="list-none"> 
              <li>Heading</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center gap-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link
                  href="/login"
              >
                <div
                  className={cn(
                    buttonVariants({ 
                      variant: "ghost" 
                    }),
                
                  )}
                >
                Login
                </div>
              </Link>
              <Link
                  href="/signup"
              >
                <div
                  className={cn(
                    buttonVariants({ 
                      variant: "default" 
                    }),
                  
                  )}
                >
                Signup
                </div>
              </Link>
            </nav>
          </div>
        </div>
    </footer>
  )
}
