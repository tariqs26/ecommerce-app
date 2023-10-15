import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="text-center text-sm text-default-500 p-2">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.title}
      </p>
    </footer>
  )
}
