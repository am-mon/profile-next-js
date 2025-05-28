import { BsArrowRight } from "react-icons/bs";
import utilStyles from "../styles/utils.module.css";

export default function Button({ children }) {
  return (
    <button
      className={`${utilStyles.has_hover_effect}  flex items-center bg-blue-600 font-medium text-white py-2 px-2 rounded hover:bg-blue-800 hover:text-white`}
    >
      {children} <BsArrowRight className="ml-2" />
    </button>
  );
}
