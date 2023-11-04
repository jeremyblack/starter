import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/registry/new-york/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-2">
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
    </header>
  )
}
