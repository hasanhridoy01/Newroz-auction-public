"use client";

import "./Header.css";
import { useEffect, useState } from "react";
import logo from "../../../../public/images/Header/logo/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //added active page color effect.............!
  const isHomePage = location.pathname.includes("/");
  const isServicePage = location.pathname.includes("service");
  const isPricingPage = location.pathname.includes("pricing");
  const isContactPage = location.pathname.includes("contact");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`container mx-auto lg:px-14 px-5 p-5 h-[79px] flex items-center justify-center fixed top-0 left-0 right-0 z-[2000] min-w-full header-filter ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
        <div className="header-logo">
          <Image
            src={logo}
            alt="logo image"
            width={100}
            height={300}
            quality={100}
            priority
          />
        </div>
        <div className="navbar-end-section">
          <nav className="header-nav" role="navigation">
            <Link href="/home" legacyBehavior>
              <a
                href="#"
                className={`nav-link ${isHomePage ? "nav-link-active" : ""}`}
              >
                Home
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a
                href="#"
                className={`nav-link ${isServicePage ? "nav-link-active" : ""}`}
              >
                Service
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a
                href="#"
                className={`nav-link ${isPricingPage ? "nav-link-active" : ""}`}
              >
                Pricing
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a
                href="#"
                className={`nav-link ${isContactPage ? "nav-link-active" : ""}`}
              >
                Contact
              </a>
            </Link>
          </nav>
        </div>
        {/* Button Section */}
        <div className="button-section">
          <button className="search-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#F23836"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#F23836"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.02441 1.28418C8.43863 1.28418 8.77441 1.61997 8.77441 2.03418V5.08064H14.0137C14.4279 5.08064 14.7637 5.41642 14.7637 5.83064C14.7637 6.24485 14.4279 6.58064 14.0137 6.58064H12.1532C11.2041 8.71066 8.73062 12.9145 3.59231 15.594C3.22504 15.7855 2.77204 15.6431 2.58052 15.2758C2.38899 14.9085 2.53147 14.4555 2.89874 14.264C7.18557 12.0285 9.46037 8.6382 10.4936 6.58064H2.03516C1.62094 6.58064 1.28516 6.24485 1.28516 5.83064C1.28516 5.41642 1.62094 5.08064 2.03516 5.08064H7.27441V2.03418C7.27441 1.61997 7.6102 1.28418 8.02441 1.28418ZM17.4474 9.36799C17.7592 9.36724 18.0389 9.55947 18.15 9.85082L22.6668 21.6985C22.8144 22.0855 22.6202 22.5189 22.2332 22.6664C21.8462 22.814 21.4128 22.6199 21.2652 22.2328L20.1984 19.4344H14.7502L13.7001 22.2294C13.5545 22.6172 13.122 22.8134 12.7343 22.6677C12.3465 22.5221 12.1503 22.0896 12.296 21.7019L16.7471 9.85422C16.8568 9.56234 17.1356 9.36875 17.4474 9.36799ZM15.3138 17.9344H19.6265L17.4544 12.2368L15.3138 17.9344ZM9.13709 12.7735C9.36957 12.4306 9.83594 12.3412 10.1788 12.5737L13.0264 14.5048C13.3692 14.7373 13.4587 15.2037 13.2262 15.5465C12.9937 15.8893 12.5273 15.9788 12.1845 15.7463L9.33686 13.8151C8.99405 13.5827 8.9046 13.1163 9.13709 12.7735Z"
                  fill="#E93839"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                <a href="#option1" className="dropdown-item">
                  English
                </a>
                <a href="#option2" className="dropdown-item">
                  Arabic
                </a>
                <a href="#option3" className="dropdown-item">
                  Kurdish
                </a>
              </div>
            )}
          </div>
          {/* user-button */}
          <button className="user-button">Login</button>
        </div>

        {/* collapse-button */}
        <div className="flex gap-3 md:hidden">
          <button className="p-2 search-small-button md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                stroke="#F23836"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 16.5L15 15"
                stroke="#F23836"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-2 collapse-button md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 6H15.75"
                stroke="#F23836"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.75 12L15.75 12"
                stroke="#F23836"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
