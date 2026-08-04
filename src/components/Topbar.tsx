"use client";
import Link from "next/link";

export default function Topbar() {
  return (
    <>
      <div
        id="topbar"
        className="w-full bg-[#3A55A5] text-white shadow transition-all duration-300"
      >
        <div className="container max-w-7xl mx-auto px-4 py-1.5 flex flex-col sm:flex-row justify-center sm:justify-end items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-6">
            {/* Email Link */}
            <Link
              href="mailto:coordinator@gainwellacademy.com"
              className="flex items-center space-x-1.5 hover:underline text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="truncate max-w-[260px] sm:max-w-none">coordinator@gainwellacademy.com</span>
            </Link>

            {/* Phone Link */}
            <Link
              href="tel:+913335346288"
              className="flex items-center space-x-1.5 hover:underline text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+91 33353 46288</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}