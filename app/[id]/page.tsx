import { getAirdropCollectionById } from "@/lib/supabase-queries"
import { isSupabaseConfigured } from "@/lib/supabase"
import { notFound } from "next/navigation"
import Image from "next/image"
import { FileText, Users } from "lucide-react"

export default async function AirdropPage({ params }: { params: { id: string } }) {
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    return (
      <main className="min-h-screen p-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/20 rounded-md p-4 text-red-500 text-sm">
            Supabase configuration is missing. Please check your environment variables.
          </div>
        </div>
      </main>
    )
  }

  // Fetch airdrop data
  const airdrop = await getAirdropCollectionById(params.id)

  if (!airdrop) {
    notFound()
  }

  // Process requirements data
  const requirements = Array.isArray(airdrop.requirements)
    ? airdrop.requirements
    : typeof airdrop.requirements === "object"
      ? Object.entries(airdrop.requirements).map(([key, value]) => ({
          title: key,
          description: value,
        }))
      : []

  // Process steps data
  const steps = Array.isArray(airdrop.how_to_steps)
    ? airdrop.how_to_steps
    : typeof airdrop.how_to_steps === "object"
      ? Object.entries(airdrop.how_to_steps).map(([key, value]) => ({
          title: key,
          description: value,
        }))
      : []

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Enhanced Banner Section */}
      <div className="relative">
        {/* Dynamic Banner Image */}
        <div className="h-80 sm:h-96 relative overflow-hidden">
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />

          {/* Banner image from Supabase */}
          {airdrop.image_cover ? (
            <Image
              src={airdrop.image_cover || "/placeholder.svg"}
              alt={`${airdrop.name} banner`}
              fill
              className="object-cover object-center"
              priority
            />
          ) : airdrop.image_url ? (
            // Fallback to project image with blur effect if no cover image
            <div className="relative h-full w-full">
              <Image
                src={airdrop.image_url || "/placeholder.svg"}
                alt={`${airdrop.name} banner`}
                fill
                className="object-cover object-center blur-sm scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ) : (
            // Gradient fallback if no images available
            <div className="h-full w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900" />
          )}

          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </div>

        {/* Profile content with improved layout */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative -mt-40 sm:-mt-48 z-20 flex flex-col items-center">
            {/* Project logo with enhanced styling */}
            <div className="w-28 h-28 bg-background rounded-full mb-6 overflow-hidden border-4 border-background shadow-lg shadow-purple-900/20 flex items-center justify-center">
              {airdrop.image_url ? (
                <Image
                  src={airdrop.image_url || "/placeholder.svg"}
                  alt={airdrop.name}
                  width={112}
                  height={112}
                  className="object-cover"
                  priority
                />
              ) : (
                <span className="text-3xl font-bold text-foreground">{airdrop.name.charAt(0)}</span>
              )}
            </div>

            {/* Project metadata with improved typography */}
            <div className="text-center">
              {/* Project name with stronger presence */}
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground tracking-tight">{airdrop.name}</h2>

              {/* Subtitle with improved readability */}
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{airdrop.subtitle}</p>

              {/* Project metadata badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {airdrop.chain && (
                  <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm text-purple-300 dark:text-purple-300 text-purple-700">
                    {airdrop.chain}
                  </span>
                )}
                {airdrop.stage && (
                  <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm text-blue-700 dark:text-blue-300">
                    {airdrop.stage}
                  </span>
                )}
                {airdrop.cost === 0 ? (
                  <span className="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full text-sm text-green-700 dark:text-green-300">
                    Free
                  </span>
                ) : airdrop.cost ? (
                  <span className="px-3 py-1 bg-amber-900/30 border border-amber-500/30 rounded-full text-sm text-amber-700 dark:text-amber-300">
                    ${airdrop.cost}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        {/* Project description */}
        {airdrop.description && (
          <div className="mb-12 p-6 bg-secondary/50 rounded-lg text-secondary-foreground">
            <p className="leading-relaxed">{airdrop.description}</p>
             <div className="h-px bg-secondary w-full mb-4"></div>
          </div>
        )}

        {/* Requirements section */}
        <div className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-foreground">
            <FileText className="w-5 h-5 text-primary" />
            Requirements
          </h2>
          <ul className="space-y-4 text-foreground">
            {requirements.length > 0 ? (
              requirements.map((req: any, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-muted-foreground">{index + 1}.</span>
                  <div>
                    {typeof req === "string" ? (
                      <span>{req}</span>
                    ) : (
                      <>
                        <span>{req.title}</span>
                        {req.description && <p className="mt-1 text-sm text-muted-foreground">{req.description}</p>}
                      </>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <li className="text-muted-foreground">No specific requirements listed.</li>
            )}
          </ul>
        </div>

        {/* How to Steps section */}
        <div className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-foreground">
            <FileText className="w-5 h-5 text-primary" />
            How to Steps
          </h2>
          <div className="space-y-4">
            {steps.length > 0 ? (
              steps.map((step: any, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-muted-foreground">{index + 1}.</span>
                  <div>
                    {typeof step === "string" ? (
                      <div>{step}</div>
                    ) : (
                      <>
                        <div>{step.title}</div>
                        {step.description && <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>}
                      </>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No specific steps listed.</p>
            )}
          </div>
        </div>

        {/* Backers section - simplified */}
        {airdrop.backers && airdrop.backers.length > 0 && (
          <div className="mb-12">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-foreground">
              <Users className="w-5 h-5 text-primary" />
              Backers
            </h2>
            <ul className="space-y-4">
              {airdrop.backers.map((backer, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-muted-foreground">{index + 1}.</span>
                  <span>{backer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

       {/* Project note */}
          <div className="text-center text-muted-foreground mt-16">
          <div className="h-px bg-secondary w-full mb-4"></div>
          <p className="leading-relaxed text-muted-foreground">
          For questions, you can join {airdrop.name}’s Discord/Telegram channel.</p>
          </div>


        
        {/* Footer note */}
        <div className="text-center text-muted-foreground mt-16">
          <p>Happy farming!</p>
          {airdrop.chain && <p className="mt-2 text-sm text-muted-foreground/70">Available on {airdrop.chain}</p>}
        </div>
      </div>
    </main>
    )
    }

