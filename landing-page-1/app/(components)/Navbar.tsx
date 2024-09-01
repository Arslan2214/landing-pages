"use client";
import Link from "next/link";
import { useState } from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const navbarItems: NavLinkProps[] = [
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Blogs", link: "/blogs" },
  { text: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 py-4 z-[1000] text-gray-800 dark:text-white">
      <nav className="container md:max-w-6xl bg-slate-300 dark:bg-slate-800 backdrop:blur-md rounded-md lg:max-w-[88rem] mx-auto flex flex-wrap items-center justify-between py-3 px-8">
        {/* Logo and Title */}
        <Link href="/">
          <span className="flex items-center space-x-3">
            <span className="text-xl font-[500] uppercase">
              Play<span className="bg-pri px-2 py-1 ml-2 rounded-md">nft</span>
            </span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:flex md:items-center md:space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col md:flex-row md:space-x-16">
            {navbarItems.map((item) => (
              <li className="" key={item.link}>
                <Link href={item.link}>
                  <span className="block py-1 text-gray-300 hover:text-yellow after:absolute after:bottom-0 after:left-0 relative after:w-0 hover:after:w-full after:h-[2px] after:content-[''] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:duration-500">
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="hidden font-head lg:flex space-x-3 items-center">
          <Link
            className="relative z-10 px-3 py-1 rounded-md text-slate-100 bg-rose-600
             after:content-[''] after:absolute after:inset-0 after:bg-pri 
             after:rounded-md after:-z-10 after:scale-105 after:transform"
            href="/join"
          >
            Join Us
          </Link>

          <Link className="bg-pri px-3 py-1 rounded-md" href="/create">
            Create Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
