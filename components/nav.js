import Link from "next/link";
import { useRouter } from "next/router";

export default function TopNav() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <nav className="bg-blue-600 text-white p-3 w-full fixed z-10">
      <ul className="flex justify-center items-center space-x-8 md:space-x-20 text-sm font-medium">
        <li>
          <Link
            href="/"
            className={`text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100 ${
              isActive("/") ? "border-b-2 border-blue-200" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100 ${
              isActive("/about") ? "border-b-2 border-blue-200" : ""
            }`}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100 ${
              isActive("/projects") ? "border-b-2 border-blue-200" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100 ${
              isActive("/contact") ? "border-b-2 border-blue-200" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
