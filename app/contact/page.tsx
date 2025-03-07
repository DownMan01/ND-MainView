"use client"

import type React from "react"

import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Contact Us" description="Have questions or feedback? We'd love to hear from you." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Support">Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here's how you can reach us directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">support@notedrop.xyz</p>
                    <p className="text-muted-foreground">info@notedrop.xyz</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Social</h3>
                    <p className="text-muted-foreground">Twitter: @notedrop</p>
                    <p className="text-muted-foreground">Discord: NoteDrop Community</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      123 Blockchain Street
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="aspect-[2/1] w-full bg-secondary flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder</p>
          </div>
        </div>
      </div>
    </main>
  )
}

