"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isReady: boolean
}

// Create context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isReady: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme") as Theme | null

    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Check system preference if no stored theme
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(systemPrefersDark ? "dark" : "light")
    }

    // Apply theme to document
    document.documentElement.classList.toggle(
      "dark",
      storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches),
    )

    setIsReady(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, isReady }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}

