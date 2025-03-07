import { PageHeader } from "@/components/ui/page-header"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader title="Privacy Policy" description="Last updated: June 1, 2023" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            At NoteDrop, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us when you:</p>
          <ul>
            <li>Create an account</li>
            <li>Fill out a form</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us</li>
            <li>Participate in surveys or promotions</li>
          </ul>

          <p>The types of information we may collect include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Wallet addresses</li>
            <li>Usage data</li>
            <li>Device information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Develop new products and services</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize your experience</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners with your consent</li>
            <li>In response to legal process or when we believe it's necessary to comply with the law</li>
            <li>To protect our rights and the rights of others</li>
          </ul>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal
            information. However, no method of transmission over the Internet or electronic storage is 100% secure, so
            we cannot guarantee absolute security.
          </p>

          <h2>Your Choices</h2>
          <p>
            You can access, update, or delete your account information at any time by logging into your account
            settings. You can also opt out of receiving promotional emails by following the instructions in those
            emails.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities and to
            distinguish you from other users of our website. You can set your browser to refuse all or some browser
            cookies, but this may prevent you from using some features of our website.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            Email: privacy@notedrop.xyz
            <br />
            Address: 123 Blockchain Street, San Francisco, CA 94103, United States
          </p>
        </div>
      </div>
    </main>
  )
}

