import Link from "next/link";
export default function Footer(params) {
  return (
    <footer className="w-full text-center py-6 bg-blue-600 text-white">
      <p className="text-sm text-white">
        © {new Date().getFullYear()} Mon. All rights reserved.
        <span className="hidden md:inline-block">&nbsp;|&nbsp;</span>
        <br className="inline-block md:hidden" />
        Website developed using <i>Next.js</i>
      </p>
    </footer>
  );
}
