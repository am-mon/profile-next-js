import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Transition({ children, back_repeat, delay_time }) {
  const animation_variant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else if (back_repeat) {
      control.start("hidden");
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
        transition={{
          ease: "linear",
          duration: 0.5,
          delay: delay_time ? delay_time : 0.5,
        }}
        variants={animation_variant}
      >
        {children}
      </motion.div>
    </>
  );
}
