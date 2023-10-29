import "@/styles/globals.css"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface AuthLayoutProps {
  children: React.ReactNode
}


export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          
              <div className="flex-1">{children}</div>
              
        </body>
      </html>
    </>
  )
}
