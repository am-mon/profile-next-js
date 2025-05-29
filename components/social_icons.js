import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

export default function Social_icons({ align = "center" }) {
  return (
    <ul
      className={`text-4xl flex flex-row space-x-7 mt-7 ${
        align === "left" ? "justify-center md:justify-start" : "justify-center"
      } text-center`}
    >
      <li>
        <a href="https://www.linkedin.com/in/ayemyatmon/" target="_blank">
          <FaLinkedin className="hover:text-blue-700" />
        </a>
      </li>
      <li>
        <a href="mailto:ayemyatmon.yn@gmail.com" target="_blank">
          <BiLogoGmail className="hover:text-red-600" />
        </a>
      </li>
      <li>
        <a href="https://github.com/am-mon" target="_blank">
          <AiFillGithub className="hover:text-green-700" />
        </a>
      </li>
    </ul>
  );
}
