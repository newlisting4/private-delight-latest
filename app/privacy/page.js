import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | PrivateDelights",
  description: "PrivateDelights privacy policy and data protection practices.",
};

function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: June 18, 2026
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At PrivateDelight, we respect your privacy and are committed to
            protecting your personal information.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard information when you visit or use our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We may collect the following information:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Personal Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Account information</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Technical Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Website usage information</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Communications
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Customer support messages</li>
                <li>Feedback submissions</li>
                <li>Reports and inquiries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            How We Use Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We may use collected information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5">
            <li>Provide website functionality</li>
            <li>Manage user accounts</li>
            <li>Improve website performance</li>
            <li>Respond to inquiries</li>
            <li>Monitor security and fraud prevention</li>
            <li>Enforce our terms and policies</li>
            <li>Comply with legal obligations</li>
            <li>Conduct analytics and research</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PrivateDelight may use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-3">
            <li>Remember user preferences</li>
            <li>Improve website performance</li>
            <li>Analyze website traffic</li>
            <li>Enhance user experience</li>
            <li>Maintain account security</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Users may adjust browser settings to refuse cookies; however,
            certain website features may not function properly.
          </p>
        </section>

        {/* Information Sharing */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Information Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We may share information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-3">
            <li>With service providers who assist website operations</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and security</li>
            <li>During business transfers or restructuring</li>
            <li>With authorities when required by applicable law</li>
          </ul>
          <p className="text-gray-700 leading-relaxed font-medium">
            We do not sell personal information to third parties.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            PrivateDelight implement reasonable administrative, technical, and
            organizational safeguards designed to protect information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            However, no method of electronic storage or internet transmission is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            PrivateDelight may contain links to third-party websites. We are not
            responsible for the privacy practices or content of external
            websites.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            PrivateDelight reserve the right to modify this Privacy Policy at
            any time. Updated versions will be posted on this page along with
            the revised effective date.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you have questions regarding this Privacy Policy, please contact
            us at:
          </p>
          <a
            href="mailto:newlisting4@gmail.com"
            className="text-[#4f6df5] hover:underline font-medium"
          >
            newlisting4@gmail.com
          </a>
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

export default PrivacyPage;
