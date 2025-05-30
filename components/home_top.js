import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Social_icons from "./social_icons";
import Transition_title from "./transition_title";
import Transition_image from "./transition_image";
import Section from "./section";

const name = "Aye Myat Mon";

export default function Home_top(params) {
  return (
    <div className={`${utilStyles.home_head} bg-blue-50`}>
      <Section>
        <div className="py-0 md:py-10 flex justify-between items-center flex-col md:flex-row-reverse">
          <div className="w-full md:w-[40%]">
            <Transition_image>
              <Image
                priority
                src="/assets/images/mon_3.png"
                className="rounded-full mx-auto w-[60%] md:w-[90%] xl:w-[90%] border-blue-200 border-4 box-border"
                height={700}
                width={700}
                alt=""
              />
            </Transition_image>
          </div>
          <div className="w-full md:w-[60%] text-center md:text-left">
            <Transition_title back_repeat>
              <h1
                className={`${utilStyles.heading2Xl} text-4xl md:text-5xl xl:text-7xl font-bold mt-7`}
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
