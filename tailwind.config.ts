import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0.25rem",
          medium: "0.5rem",
          large: "0.75rem",
        },
      },
    }),
  ],
}
export default config
