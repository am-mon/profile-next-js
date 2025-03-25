import { BsArrowRight } from "react-icons/bs";

export default function Button({ children }) {
  return (
    <button className="flex items-center bg-emerald-300 text-black py-1 px-2 rounded hover:bg-black hover:text-white">
      {children} <BsArrowRight className="ml-2" />
    </button>
  );
}
