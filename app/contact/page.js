import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact | PrivateDelights",
  description: "Get in touch with PrivateDelights support team.",
};

function ContactPage() {
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
          Contact PrivateDelights
        </h1>
        <p className="text-lg text-gray-500 mb-10">Get in Touch</p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Thank you for visiting PrivateDelights. We value our users and strive
          to provide prompt assistance whenever possible. If you have questions,
          concerns, feedback, or require support regarding your account or use
          of our website, please contact us using the information below.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Customer Support
            </h2>
            <p className="text-sm text-gray-500 mb-3">Email</p>
            <a
              href="mailto:newlisting4@gmail.com"
              className="text-[#4f6df5] hover:underline break-all"
            >
              newlisting4@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              General Inquiries
            </h2>
            <p className="text-sm text-gray-500 mb-3">Email</p>
            <a
              href="mailto:newlisting4@gmail.com"
              className="text-[#4f6df5] hover:underline break-all"
            >
              newlisting4@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Business Inquiries
            </h2>
            <p className="text-sm text-gray-500 mb-3">Email</p>
            <a
              href="mailto:newlisting4@gmail.com"
              className="text-[#4f6df5] hover:underline break-all"
            >
              newlisting4@gmail.com
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-blue-50 border-l-4 border-[#4f6df5] p-5 rounded-r-lg mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Response Time
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our support team aims to respond to inquiries within 24 to 72
            business hours. Response times may vary depending on the nature and
            complexity of the request.
          </p>
        </div>

        {/* Reporting Violations */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 shadow-sm mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Reporting Violations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you believe content on our platform violates our Terms of Use,
            infringes intellectual property rights, involves unauthorized use of
            information, or otherwise breaches our policies, please contact us
            immediately and provide the following information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5 mb-4">
            <li>Your full name</li>
            <li>Contact information</li>
            <li>Description of the issue</li>
            <li>Relevant URLs or screenshots</li>
            <li>Any supporting documentation</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            PrivateDelights review all reports in good faith and reserve the
            right to remove content, suspend accounts, or take other actions as
            deemed appropriate.
          </p>
        </div>

        <p className="text-gray-600 italic text-sm text-center">
          PrivateDelights feedback helps us maintain a safe, respectful, and
          professional platform for all users.
        </p>
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

export default ContactPage;
