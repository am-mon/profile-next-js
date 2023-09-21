import utilStyles from "../styles/utils.module.css";
import Section from "./section";
import Social_icons from "./social_icons";

export default function Get_in_touch(params) {
  return (
    <>
      <div className="bg-gray-150">
        <Section>
          <h2 className={`${utilStyles.headingXl} text-center`}>
            Get In Touch
          </h2>
          <Social_icons />
        </Section>
      </div>
    </>
  );
}
