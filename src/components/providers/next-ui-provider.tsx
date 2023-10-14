"use client"

import { NextUIProvider as Provider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </Provider>
  )
}
