import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="border-b border-border pb-8 mb-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h1>
        {description && <p className="text-muted-foreground text-lg">{description}</p>}
        {children}
      </div>
    </div>
  )
}

