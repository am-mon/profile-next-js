import Transition from "./transition";

export default function Section({ children }) {
  return (
    <div className="py-20">
      <Transition>
        <div className="container mx-auto box-border px-5">{children}</div>
      </Transition>
    </div>
  );
}
