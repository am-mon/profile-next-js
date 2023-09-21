import { BsArrowRight } from "react-icons/bs";

export default function Button({ children }) {
  return (
    <button className="flex items-center black underline  hover:text-orange-500">
      {children} <BsArrowRight className="ml-2" />
    </button>
  );
}
