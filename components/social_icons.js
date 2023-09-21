import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function Social_icons(params) {
  return (
    <ul className="text-2xl flex flex-row space-x-7 justify-center text-center mt-7">
      <li>
        <a href="https://www.linkedin.com/in/ayemyatmon/" target="_blank">
          <BsLinkedin className="hover:text-blue-800" />
        </a>
      </li>
      <li>
        <a href="mailto:ayemyatmon.yn@gmail.com" target="_blank">
          <BiLogoGmail className="hover:text-red-600" />
        </a>
      </li>
    </ul>
  );
}
