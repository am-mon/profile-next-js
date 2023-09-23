import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Transition_rotate({
  children,
  back_repeat,
  delay_time,
}) {
  const animation_variant = {
    visible: { opacity: 1, rotate: [0, 10, -10, 0] },
    hidden: { opacity: 0, rotate: [0, 10, 10, 0] },
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
          delay: delay_time ? delay_time : 2,
        }}
        variants={animation_variant}
      >
        {children}
      </motion.div>
    </>
  );
}
