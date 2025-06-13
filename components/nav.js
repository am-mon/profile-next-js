import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import Social_icons from "./social_icons";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className="bg-blue-600 text-white py-4 w-full fixed z-40">
      <div className="container mx-auto box-border px-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold block md:inline-block text-white hover:text-inherit"
        >
          Mon's Portfolio
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <AiOutlineClose /> : <RiMenu3Line />}
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } flex flex-col justify-center items-center h-[calc(100vh-3.5rem)] pb-[5rem] md:pb-0 md:h-auto absolute top-14 left-0 w-full bg-blue-600 px-5 md:bg-transparent md:block md:static md:w-auto`}
        >
          <ul className="flex flex-col md:flex md:flex-row md:space-x-10 lg:space-x-20 md:space-y-0 md:items-center text-2xl md:text-base font-medium pt-10 md:pt-0 text-center md:text-left">
            <li>
              <Link
                href="/"
                className={`block md:inline-block text-white hover:text-inherit md:hover:border-b-2 md:hover:border-blue-300 py-5 md:py-1 transition duration-400 ease-in-out ${
                  isActive("/")
                    ? "text-blue-300 md:text-white md:border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block md:inline-block text-white hover:text-inherit md:hover:border-b-2 md:hover:border-blue-300 py-5 md:py-1 transition duration-400 ease-in-out ${
                  isActive("/about")
                    ? "text-blue-300 md:text-white md:border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block md:inline-block text-white hover:text-inherit md:hover:border-b-2 md:hover:border-blue-300 py-5 md:py-1 transition duration-400 ease-in-out ${
                  isActive("/projects")
                    ? "text-blue-300 md:text-white md:border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block md:inline-block text-white hover:text-inherit md:hover:border-b-2 md:hover:border-blue-300 py-5 md:py-1 transition duration-400 ease-in-out ${
                  isActive("/contact")
                    ? "text-blue-300 md:text-white md:border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden mt-2 md:mt-0">
            <Social_icons />
          </div>
        </nav>
      </div>
    </div>
  );
}
