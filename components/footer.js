import Link from "next/link";
export default function Footer(params) {
  return (
    <footer className="w-full text-center py-6 bg-blue-600 text-white">
      <p className="text-sm text-white">
        © {new Date().getFullYear()} Mon. All rights reserved.
      </p>
    </footer>
  );
}
