import { footerConfig } from "@/config/footer"

export function Footer() {
  return (
    <footer className="bg-primary-900 p-10 ">
      <div className="m-auto max-w-7xl xl:grid-cols-3 grid md:grid-cols-2 grid-cols-1 gap-8">
        {footerConfig.map((section) => (
          <div className="flex flex-col" key={section.title}>
            <span className="font-semibold text-lg mb-3 text-warning">{section.title}</span>
            {section.links.map((link) => (
              <a
                key={link}
                className="hover:underline hover:cursor-pointer text-primary-foreground/70 mb-1"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
