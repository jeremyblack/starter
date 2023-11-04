import { siteConfig } from "@/config/site"
import Link from "next/link"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="mt-12 w-full border-t py-6 md:px-8 md:py-0">
      <div className="container relative">
        <div className="grid grid-cols-6 gap-4 py-12 md:grid-cols-1 lg:grid-cols-6 lg:gap-8">
         
          
            <div className="grid grid-rows-2">
              <div>jeremy inc.</div>
              <div>
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
              </div>
            </div>
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
    </footer>
  )
}
