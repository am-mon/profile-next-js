import Link from "next/link";
import { useRouter } from "next/router";

export default function TopNav() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className="bg-blue-600 text-white py-4 px-3 w-full fixed z-10">
      <div className="container mx-auto box-border px-5 flex justify-center md:justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hidden md:block text-white hover:text-white"
        >
          Mon's Portfolio
        </Link>
        <nav>
          <ul className="flex justify-center items-center space-x-4 md:space-x-16 text-sm md:text-base font-medium">
            <li>
              <Link
                href="/"
                className={`text-white hover:text-white hover:border-b-2 hover:border-blue-300 py-1 transition duration-400 ease-in-out ${
                  isActive("/")
                    ? "border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-white hover:text-white hover:border-b-2 hover:border-blue-300 py-1 transition duration-400 ease-in-out ${
                  isActive("/about")
                    ? "border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`text-white hover:text-white hover:border-b-2 hover:border-blue-300 py-1 transition duration-400 ease-in-out ${
                  isActive("/projects")
                    ? "border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-white hover:text-white hover:border-b-2 hover:border-blue-300 py-1 transition duration-400 ease-in-out ${
                  isActive("/contact")
                    ? "border-b-2 border-white"
                    : "border-transparent"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
