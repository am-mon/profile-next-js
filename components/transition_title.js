import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Transition_title({ children }) {
  const fadeIn_animation_variant = {
    visible: { opacity: 1, position: "relative", top: 0 },
    hidden: { opacity: 0, position: "relative", top: 100 },
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
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
        variants={fadeIn_animation_variant}
      >
        {children}
      </motion.div>
    </>
  );
}
