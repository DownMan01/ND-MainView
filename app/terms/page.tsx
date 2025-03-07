import { PageHeader } from "@/components/ui/page-header"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader title="Terms of Service" description="Last updated: June 1, 2023" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Please read these Terms of Service ("Terms") carefully before using the NoteDrop website and services.</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
            Terms, you may not access or use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            NoteDrop provides a platform for discovering and tracking Web3 airdrops and blockchain projects. Our
            services include but are not limited to:
          </p>
          <ul>
            <li>Airdrop listings and information</li>
            <li>Project tracking</li>
            <li>Notification services</li>
            <li>Educational content</li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features of our services, you may need to create an account. You are responsible for
            maintaining the confidentiality of your account credentials and for all activities that occur under your
            account.
          </p>
          <p>
            You agree to provide accurate and complete information when creating your account and to update your
            information to keep it accurate and current.
          </p>

          <h2>4. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any illegal purpose</li>
            <li>Violate any laws or regulations</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Collect or store personal data about other users without their consent</li>
            <li>Use our services to send spam or other unsolicited messages</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            Our services and all content and materials included on our services, such as text, graphics, logos, images,
            and software, are the property of NoteDrop or its licensors and are protected by copyright, trademark, and
            other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of the material on our services without our prior written
            consent.
          </p>

          <h2>6. Third-Party Links and Content</h2>
          <p>
            Our services may contain links to third-party websites or services that are not owned or controlled by
            NoteDrop. We have no control over, and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            Our services are provided on an "as is" and "as available" basis, without any warranties of any kind, either
            express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall NoteDrop be liable for any indirect, incidental, special, consequential, or punitive
            damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
            resulting from your access to or use of or inability to access or use our services.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless NoteDrop and its officers, directors, employees, and
            agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or
            fees (including reasonable attorneys' fees) arising from or relating to your violation of these Terms or
            your use of our services.
          </p>

          <h2>10. Termination</h2>
          <p>
            We may terminate or suspend your account and access to our services immediately, without prior notice or
            liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use our services will immediately cease. All provisions of these Terms which
            by their nature should survive termination shall survive termination, including, without limitation,
            ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
            material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our services after any revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, you are no longer authorized to use our services.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of California, without
            regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect.
          </p>

          <h2>13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            Email: legal@notedrop.xyz
            <br />
            Address: 123 Blockchain Street, San Francisco, CA 94103, United States
          </p>
        </div>
      </div>
    </main>
  )
}

