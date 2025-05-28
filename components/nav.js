import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="bg-blue-600 text-white p-3 w-full fixed z-10">
      <ul className="flex justify-center items-center space-x-8 md:space-x-20 text-sm font-medium">
        <li>
          <Link
            href="/"
            className="text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white hover:text-blue-100 hover:border-b-2 hover:border-blue-100"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
