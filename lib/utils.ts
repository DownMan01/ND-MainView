import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely parses JSON, returning null if parsing fails
 */
export function safeJsonParse<T>(json: string): T | null {
  try {
    return JSON.parse(json) as T
  } catch (error) {
    console.error("Error parsing JSON:", error)
    return null
  }
}

/**
 * Formats a Supabase error message for display
 */
export function formatSupabaseError(error: any): string {
  if (typeof error === "string") {
    return error
  }

  if (error?.message) {
    return error.message
  }

  if (error?.error_description) {
    return error.error_description
  }

  return "An unknown error occurred"
}

