"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Footer.css";
import CommonButton from "../../CommonComponents/CommonButton/CommonButton";

const Footer = () => {
  const router = useRouter();

  // Safely access pathname
  const currentPath = router?.pathname || "";

  const isHomePage = currentPath === "/";
  const isServicePage = currentPath.includes("service");
  const isPricingPage = currentPath.includes("pricing");
  const isContactPage = currentPath.includes("contact");

  return (
    <div className="footer-bg-color lg:h-[656px] h-auto">
      <div className="container px-5 mx-auto lg:px-14">
        <div className="flex flex-col gap-10 pt-14 footer-header lg:pt-36 lg:flex-row">
          <div className="relative w-[250px] h-[53px]">
            <Image
              src="/images/footer/logo/Logo.png"
              fill
              priority
              alt="footer logo"
            />
          </div>
          <div className="flex items-center justify-center gap-8">
            <Link href="/" legacyBehavior>
              <a className={`nav-link ${isHomePage ? "nav-link-active" : ""}`}>
                Home
              </a>
            </Link>
            <Link href="/service" legacyBehavior>
              <a
                className={`nav-link ${isServicePage ? "nav-link-active" : ""}`}
              >
                Service
              </a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a
                className={`nav-link ${isPricingPage ? "nav-link-active" : ""}`}
              >
                Pricing
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a
                className={`nav-link ${isContactPage ? "nav-link-active" : ""}`}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>

        <div className="grid items-start justify-center grid-flow-row grid-cols-1 mt-10 gap-9 lg:mt-16 lg:grid-flow-col lg:grid-cols-3">
          <div className="">
            <p
              className="text-[14px] landing-[16px] text-[#555555] uppercase"
              style={{ fontFamily: "Roboto", fontWeight: 700 }}
            >
              Keep In touch
            </p>
            <div className="mt-10">
              <h3
                className="text-[24px] landing-[36px] text-[#2E2E3E]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                hello@auction.com
              </h3>
              <p
                className="text-[16px] landing-[24px] text-[#2E2E3E] mt-3"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Rev Up Your Auctions! Buy, Sell, and Bid on Cars, Bikes, and
                Vespas Today!
              </p>
              <p
                className="text-[14px] leading-[21px] text-[#2E2E3E] mt-4"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Download the app
              </p>
              <CommonButton />
            </div>
          </div>
          <div className="">
            <Link
              href=""
              className="text-[14px] landing-[16px] text-[#555555] uppercase"
              style={{ fontFamily: "Poppins", fontWeight: 700 }}
            >
              CONTACT US
            </Link>
            <div className="flex flex-col mt-10 gap-7">
              <Link
                href=""
                className="text-[14px] landing-[21px] text-[#2E2E3E] uppercase"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                About us
              </Link>
              <Link
                href=""
                className="text-[14px] landing-[21px] text-[#2E2E3E] uppercase"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Feedback
              </Link>
              <Link
                href=""
                className="text-[14px] landing-[21px] text-[#2E2E3E] uppercase"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Advertise with Us
              </Link>
              <Link
                href=""
                className="text-[14px] landing-[21px] text-[#2E2E3E] uppercase"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Become Partner
              </Link>
            </div>
          </div>
          <div className="">
            <p
              className="text-[14px] landing-[16px] text-[#555555] uppercase"
              style={{ fontFamily: "Roboto", fontWeight: 700 }}
            >
              Join with us
            </p>
            <div className="mt-10">
              <p
                className="text-[16px] landing-[24px] text-[#2E2E3E] uppercase"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Discover a world of vehicles at unbeatable prices. Join our
                auctions to find your next ride or sell your vehicle to a
                network of ready buyers.
              </p>
              <div className="mt-4">
                <p
                  className="text-[14px] landing-[21px] text-[#2E2E3E] uppercase"
                  style={{ fontFamily: "Poppins", fontWeight: 500 }}
                >
                  Follow us on
                </p>
                <div className="flex items-center justify-start gap-4 mt-3 cursor-pointer">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.48291"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2E2E3E"
                    />
                    <path
                      d="M18.5 12.4829H13.5C12 12.4829 11 13.4829 11 14.9829V17.9829C11 19.4829 12 20.4829 13.5 20.4829H18.5C20 20.4829 21 19.4829 21 17.9829V14.9829C21 13.4829 20 12.4829 18.5 12.4829ZM16.945 16.9979L15.71 17.7379C15.21 18.0379 14.8 17.8079 14.8 17.2229V15.7379C14.8 15.1529 15.21 14.9229 15.71 15.2229L16.945 15.9629C17.42 16.2529 17.42 16.7129 16.945 16.9979Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.48291"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2E2E3E"
                    />
                    <path
                      d="M18.7443 16.4705H16.9726V22.9612H14.2884V16.4705H13.0117V14.1895H14.2884V12.7134C14.2884 11.6578 14.7898 10.0049 16.9965 10.0049L18.9848 10.0132V12.2274H17.5422C17.3055 12.2274 16.9728 12.3456 16.9728 12.8491V14.1916H18.9788L18.7443 16.4705Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.48291"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2E2E3E"
                    />
                    <path
                      d="M18.095 11.4829H13.905C12.085 11.4829 11 12.5679 11 14.3879V18.5729C11 20.3979 12.085 21.4829 13.905 21.4829H18.09C19.91 21.4829 20.995 20.3979 20.995 18.5779V14.3879C21 12.5679 19.915 11.4829 18.095 11.4829ZM16 18.4229C14.93 18.4229 14.06 17.5529 14.06 16.4829C14.06 15.4129 14.93 14.5429 16 14.5429C17.07 14.5429 17.94 15.4129 17.94 16.4829C17.94 17.5529 17.07 18.4229 16 18.4229ZM18.96 13.9229C18.935 13.9829 18.9 14.0379 18.855 14.0879C18.805 14.1329 18.75 14.1679 18.69 14.1929C18.63 14.2179 18.565 14.2329 18.5 14.2329C18.365 14.2329 18.24 14.1829 18.145 14.0879C18.1 14.0379 18.065 13.9829 18.04 13.9229C18.015 13.8629 18 13.7979 18 13.7329C18 13.6679 18.015 13.6029 18.04 13.5429C18.065 13.4779 18.1 13.4279 18.145 13.3779C18.26 13.2629 18.435 13.2079 18.595 13.2429C18.63 13.2479 18.66 13.2579 18.69 13.2729C18.72 13.2829 18.75 13.2979 18.78 13.3179C18.805 13.3329 18.83 13.3579 18.855 13.3779C18.9 13.4279 18.935 13.4779 18.96 13.5429C18.985 13.6029 19 13.6679 19 13.7329C19 13.7979 18.985 13.8629 18.96 13.9229Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.48291"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2E2E3E"
                    />
                    <path
                      d="M11.5 11.6079C11.3565 11.6079 11.2256 11.6898 11.1628 11.8188C11.1 11.9478 11.1164 12.1014 11.2049 12.2143L14.8675 16.8859L11.4301 20.8639C11.2947 21.0206 11.312 21.2574 11.4687 21.3928C11.6254 21.5282 11.8622 21.5109 11.9976 21.3542L15.339 17.4874L18.2609 21.2143C18.332 21.3049 18.4408 21.3579 18.556 21.3579H20.5C20.6435 21.3579 20.7744 21.276 20.8372 21.147C20.9 21.018 20.8836 20.8645 20.7951 20.7515L16.858 15.7295L19.8679 12.2463C20.0033 12.0896 19.986 11.8528 19.8293 11.7174C19.6726 11.582 19.4358 11.5992 19.3004 11.7559L16.3865 15.1281L13.7394 11.7515C13.6683 11.6609 13.5595 11.6079 13.4443 11.6079H11.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 mb-10 lg:flex-row mt-14">
          <div className="">
            <p
              className="text-[14px] landing-[21px] text-[#555555]"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              Copyright © 2024 <span className="text-[#E93839]">Auction</span>{" "}
              All rights reserved
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <Link
              href=""
              className="text-[14px] landing-[21px] text-[#555555] hover:text-[#E93839]"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              Terms and Conditions
            </Link>
            <Link
              href=""
              className="text-[14px] landing-[21px] text-[#555555] hover:text-[#E93839]"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="text-[14px] landing-[21px] text-[#555555] hover:text-[#E93839]"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
