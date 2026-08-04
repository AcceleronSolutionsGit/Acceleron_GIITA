'use client';

import HeaderWrapper from '@/components/HeaderWrapper';
import GiitaFooter from '@/components/GiitaFooter';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderWrapper />

      {/* Hero Banner */}
      <section className="relative pt-[100px] xl:pt-[120px] h-[320px] sm:h-[360px] md:h-[420px] w-full bg-gradient-to-br from-[#08193C] via-[#3A55A5] to-[#08193C] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Background visual graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F5872E]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#40A748]/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-widest text-[#F5872E] uppercase mb-2 bg-[#F5872E]/10 border border-[#F5872E]/20 px-3.5 py-1 rounded-full">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Understand how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
            
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F5872E] rounded-full" />
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Welcome to the Gainwell Institute of Integrated Talent Advancement (GIITA), a division of MASS Associates. We are committed to protecting the privacy of our students, partners, and site visitors. This Privacy Policy details how we collect, handle, process, and protect any personal information you provide when using our website and enrolling in our educational programs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#3A55A5] rounded-full" />
                2. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We may collect personal information directly from you when you fill out enquiry forms, contact us via email, or subscribe to updates. This information includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 text-sm md:text-base space-y-1">
                <li>Full Name</li>
                <li>Contact information including Email Address and Phone Number</li>
                <li>Professional background, organization details, or student credentials</li>
                <li>Course preferences and learning objectives</li>
                <li>Messages or comments submitted through enquiry forms</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#40A748] rounded-full" />
                3. How We Use Collected Data
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                The information we gather is used to improve our services and understand your academic and training needs. Specifically, we use your data for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 text-sm md:text-base space-y-1">
                <li>Processing course applications and admissions</li>
                <li>Responding directly to your messages, queries, or requests for brochures</li>
                <li>Improving our curriculum, website interface, and user experience</li>
                <li>Sending periodic updates, newsletters, or notifications regarding upcoming training sessions</li>
                <li>Meeting regulatory or academic record-keeping compliance requirements</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F5872E] rounded-full" />
                4. Data Sharing and Third Parties
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                GIITA is a division of MASS Associates and part of the Gainwell Group. We may share information internally within our parent organizations to provide you with broader services or academic resources. We <strong>do not sell, distribute, or lease</strong> your personal information to external commercial third parties unless we have your explicit consent or are legally mandated to do so.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#3A55A5] rounded-full" />
                5. Security and Data Protection
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We implement industry-standard physical, electronic, and administrative safeguards to secure your personal data. However, please be aware that no transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#40A748] rounded-full" />
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Our website utilizes cookies to gather statistical visitor data, track page navigation, and remember user preferences. This details website traffic patterns and helps us refine our layout and content. You can choose to disable cookies in your web browser, though doing so might disable certain page functionalities.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F5872E] rounded-full" />
                7. Your Legal Rights
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                You have the right to request access to the personal data we hold about you. You can ask us to edit, update, or completely delete your record. To request a review of your information, please contact us using the details below.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#08193C]">
                8. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                For questions regarding this Privacy Policy or requests regarding your personal information, please contact GIITA at:
              </p>
              <p className="text-sm font-semibold text-slate-700">
                Gainwell Institute of Integrated Talent Advancement<br />
                Address: 602, Godrej Waterside, 6th Floor Tower I, Sector V, Salt Lake, Kolkata – 700 091, West Bengal, India<br />
                Email: <a href="mailto:coordinator@gainwellacademy.com" className="text-[#3A55A5] hover:underline">coordinator@gainwellacademy.com</a><br />
                Phone: +91 3335 346288
              </p>
            </section>

          </div>
        </div>
      </section>

      <GiitaFooter />
    </main>
  );
}
