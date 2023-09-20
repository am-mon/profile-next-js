import utilStyles from "../styles/utils.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function Get_in_touch(params) {
  return (
    <>
      <div className="bg-zinc-100 py-20">
        <div className="container mx-auto box-border px-3">
          <h2 className={`${utilStyles.headingXl} text-center`}>
            Get In Touch
          </h2>
          <ul className="text-2xl flex flex-row space-x-7 justify-center text-center mt-7">
            <li>
              <a href="https://www.linkedin.com/in/ayemyatmon/" target="_blank">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:ayemyatmon.yn@gmail.com" target="_blank">
                <BiLogoGmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
