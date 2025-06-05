import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Social_icons from "./social_icons";
import Transition_title from "./transition_title";
import Transition_image from "./transition_image";
import Section from "./section";

const name = "Aye Myat Mon";

export default function Home_top(params) {
  return (
    <div
      className={`${utilStyles.home_head} bg-blue-50 bg-gradient-to-tr from-indigo-100 via-zinc-50 to-blue-100`}
    >
      <Section>
        <div className="py-0 md:py-10 flex justify-between items-center flex-col md:flex-row-reverse">
          <div className="w-full md:w-[40%] relative">
            <Transition_image>
              <div className="mx-auto w-[60%] md:w-[90%] xl:w-[70%] bg-white border-0 p-4 pb-2 pt-6 md:p-6 md:pb-4 md:pt-10 box-border rotate-6 shadow-xl text-center">
                <Image
                  priority
                  src="/assets/images/mon_3.png"
                  className=""
                  height={700}
                  width={700}
                  alt=""
                />
                <p className="pt-2 md:pt-4 font-bold text-lg md:text-xl lg:text-3xl hand-writing italic">
                  hello ~
                </p>
              </div>
              <Image
                priority
                src="/assets/images/blue-pin.svg"
                className="mx-auto absolute w-[10%] translate-x-[45%] left-[45%] top-[-10%] z-0"
                height={700}
                width={700}
                alt=""
              />
            </Transition_image>
          </div>
          <div className="w-full md:w-[60%] text-center md:text-left">
            <Transition_title back_repeat>
              <h1
                className={`${utilStyles.heading2Xl} text-4xl md:text-5xl xl:text-7xl font-bold mt-10 md:mt-0 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent inline-block`}
              >
                {name}
              </h1>
            </Transition_title>
            <Transition_title back_repeat>
              <h2
                className={`${utilStyles.headingLg} text-2xl md:text-3xl xl:text-4xl`}
              >
                <b>Web Developer | Frontend & CMS&nbsp;Specialist</b>
                <br />
                <span className="mt-4 inline-block text-xl xl:text-2xl">
                  JavaScript, React, Next.js, Vue, Tailwind CSS,{" "}
                  <br className="hidden sm:inline-block" />
                  PHP, Python, SQL, WordPress, and WooCommerce
                </span>
              </h2>
              <Social_icons align="left" />
            </Transition_title>
          </div>
        </div>
      </Section>
    </div>
  );
}
