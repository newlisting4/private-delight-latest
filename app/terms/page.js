import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | PrivateDelights",
  description:
    "PrivateDelights terms of use — rules and guidelines for using the platform.",
};

function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50/30 text-gray-900 font-sans">
      {/* Simple Header */}
      <header className="px-[15px] lg:px-[25px] py-[16px] shadow-custom-bottom text-[#4f6df5] bg-white">
        <Link href="/" className="cursor-pointer select-none inline-block">
          <h1 className="text-2xl font-bold italic tracking-wide">
            PrivateDelights
          </h1>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: June 18, 2026
        </p>

        {/* Acceptance */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using PrivateDelight, you agree to be bound by these
            Terms of Use. If you do not agree with these terms, you must
            discontinue use of the website immediately.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Eligibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You must be at least eighteen (18) years of age, or the age of legal
            majority in your jurisdiction, whichever is higher, to access
            PrivateDelights.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            By using this PrivateDelights website, you represent and warrant
            that:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5">
            <li>You are legally an adult.</li>
            <li>You have the legal capacity to enter into agreements.</li>
            <li>
              You will comply with all applicable laws and regulations.
            </li>
          </ul>
        </section>

        {/* Platform Services */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Platform Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PrivateDelight provides an online platform that allows independent
            adults to publish advertisements and communicate with other users.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3 font-medium">
            PrivateDelights does not:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-3">
            <li>Employ service providers</li>
            <li>Arrange meetings</li>
            <li>Negotiate services</li>
            <li>Control user interactions</li>
            <li>Guarantee the accuracy of listings</li>
            <li>Endorse any particular advertiser</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            All interactions between users occur entirely at their own risk and
            discretion.
          </p>
        </section>

        {/* User Conduct */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            User Conduct
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Users agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-3">
            <li>Violate any applicable law</li>
            <li>Post false or misleading information</li>
            <li>Impersonate another person</li>
            <li>Harass, threaten, or abuse other users</li>
            <li>Upload malicious software</li>
            <li>Attempt unauthorized access to accounts or systems</li>
            <li>Use automated tools to scrape website content</li>
            <li>Infringe intellectual property rights</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>
        </section>

        {/* User Content */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            User Content
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Users remain solely responsible for all content they upload, submit,
            publish, or transmit through the website.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            By posting content, users represent that they possess all necessary
            rights and permissions to publish such content.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right, but assume no obligation, to review, edit,
            remove, or restrict access to content that violates these Terms of
            Use.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The website and all services are provided on an &quot;AS IS&quot;
            and &quot;AS AVAILABLE&quot; basis without warranties of any kind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            PrivateDelights do not guarantee:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-3">
            <li>Continuous website availability</li>
            <li>Error-free operation</li>
            <li>Accuracy of listings</li>
            <li>User identity verification</li>
            <li>Outcomes of interactions between users</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Use of the PrivateDelights is entirely at your own risk.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            To the maximum extent permitted by law, PrivateDelight, its owners,
            affiliates, employees, and partners shall not be liable for any
            direct, indirect, incidental, special, consequential, or punitive
            damages arising from:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-3">
            <li>Use of the PrivateDelights</li>
            <li>User-generated content</li>
            <li>Third-party conduct</li>
            <li>Technical interruptions</li>
            <li>Loss of data</li>
            <li>Unauthorized access to accounts</li>
          </ul>
        </section>

        {/* Modifications */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update these Terms of Use at any time
            without prior notice. Continued use of the website constitutes
            acceptance of any revised terms.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5f5] py-10 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-14 gap-y-4 text-[#4f6df5] text-[16.8px] font-medium">
            <Link href="/contact" className="hover:underline text-center leading-tight">
              Contact <span className="block">PrivateDelights</span>
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <Link href="/" className="hover:underline">
              Locations
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
          <p className="text-gray-800 text-[16px] md:text-lg font-semibold mt-1 select-none">
            &copy; 2026 PrivateDelights.ch
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TermsPage;
