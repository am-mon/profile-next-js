import { BsArrowRight } from "react-icons/bs";
import utilStyles from "../styles/utils.module.css";

export default function Button({ children }) {
  return (
    <button
      className={`${utilStyles.has_hover_effect}  flex items-center bg-emerald-300 font-medium text-black py-2 px-2 rounded hover:bg-black hover:text-white`}
    >
      {children} <BsArrowRight className="ml-2" />
    </button>
  );
}
