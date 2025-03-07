import { PageHeader } from "@/components/ui/page-header"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader title="Cookie Policy" description="Last updated: June 1, 2023" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            This Cookie Policy explains how NoteDrop ("we", "us", or "our") uses cookies and similar technologies on our
            website. By using our website, you consent to the use of cookies as described in this policy.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used
            to make websites work more efficiently and provide information to the website owners.
          </p>
          <p>
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go
            offline, while session cookies are deleted as soon as you close your web browser.
          </p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They
              enable basic functions like page navigation and access to secure areas of the website.
            </li>
            <li>
              <strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the number
              of visitors and see how visitors move around our website. This helps us improve the way our website works.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality
              and personalization. They may be set by us or by third-party providers whose services we have added to our
              pages.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have
              visited, and the links you have followed. We may use this information to make our website and the
              advertising displayed on it more relevant to your interests.
            </li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
            the website and deliver advertisements on and through the website.
          </p>

          <h2>What Specific Cookies Do We Use?</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-border p-2 text-left">Name</th>
                <th className="border border-border p-2 text-left">Purpose</th>
                <th className="border border-border p-2 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">_ga</td>
                <td className="border border-border p-2">Used by Google Analytics to distinguish users</td>
                <td className="border border-border p-2">2 years</td>
              </tr>
              <tr>
                <td className="border border-border p-2">_gid</td>
                <td className="border border-border p-2">Used by Google Analytics to distinguish users</td>
                <td className="border border-border p-2">24 hours</td>
              </tr>
              <tr>
                <td className="border border-border p-2">_gat</td>
                <td className="border border-border p-2">Used by Google Analytics to throttle request rate</td>
                <td className="border border-border p-2">1 minute</td>
              </tr>
              <tr>
                <td className="border border-border p-2">auth_token</td>
                <td className="border border-border p-2">Used to keep users logged in</td>
                <td className="border border-border p-2">30 days</td>
              </tr>
              <tr>
                <td className="border border-border p-2">theme</td>
                <td className="border border-border p-2">Stores user's theme preference</td>
                <td className="border border-border p-2">1 year</td>
              </tr>
            </tbody>
          </table>

          <h2>How to Control Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the
            ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be
            personalized to you.
          </p>
          <p>
            To find out more about cookies, including how to see what cookies have been set and how to manage and delete
            them, visit{" "}
            <a href="https://www.allaboutcookies.org" className="text-primary hover:underline">
              www.allaboutcookies.org
            </a>
            .
          </p>

          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new
            Cookie Policy on this page and updating the "Last updated" date.
          </p>
          <p>We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Cookie Policy, please contact us at:</p>
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

