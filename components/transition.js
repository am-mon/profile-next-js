import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Transition({ children }) {
  const animation_variant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
        variants={animation_variant}
      >
        {children}
      </motion.div>
    </>
  );
}
