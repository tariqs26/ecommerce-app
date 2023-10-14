"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@nextui-org/react"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      isSelected={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      color="warning"
      startContent={<Sun />}
      endContent={<Moon />}
    />
  )
}
