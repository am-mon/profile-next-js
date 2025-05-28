// components/about_me.js

import Section from "./section";
import Transition_title from "./transition_title";
import utilStyles from "../styles/utils.module.css";
import { TiTick } from "react-icons/ti";

export default function About_me() {
  return (
    <div className="bg-blue-50 ">
      <Section>
        <Transition_title>
          <h1 className={utilStyles.headingXl}>About Me</h1>
        </Transition_title>
        <div className="mt-2 pl-5 md:pl-8 py-3 border-l-4 border-blue-100 text-base md:text-lg">
          <p className="mb-4">
            Hello! I’m Aye Myat Mon, a Web Developer based in Manchester, United
            Kingdom, with over six years of professional experience,
            specialising in WordPress, WooCommerce, and PHP development.
          </p>
          <p className="mb-4">
            I’ve worked with companies in Singapore and Japan, delivering
            bespoke websites, e-commerce platforms, and CMS solutions tailored
            to specific business needs. My&nbsp;core strengths include custom
            theme development, ACF development, plugin integration, responsive
            layouts, website optimisation, SEO best practices to improve
            search&nbsp;engine rankings and site performance, as well as
            creating responsive email templates compatible with multiple
            devices.
          </p>
          <p className="mb-4">
            Alongside my CMS and backend expertise, I also have hands-on
            experience with modern frontend technologies such as JavaScript,
            Vue, React, Next.js, and Tailwind&nbsp;CSS.
          </p>
          {/* <p className="mb-4">
            I’m currently seeking a full-time or remote web development role in
            the UK and am available to start immediately.
          </p> */}
          <ul>
            {[
              "Right to work in the UK",
              "WordPress & WooCommerce",
              "PHP & ACF development",
              "Custom theme & plugin development",
              "Responsive design & email templates",
              "SEO optimisation",
              "React, Next.js, Vue.js & Tailwind CSS",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-2 text-base md:text-lg mb-2"
              >
                <div style={{ width: 25 }}>
                  <TiTick className="text-blue-600" size={25} />
                </div>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
