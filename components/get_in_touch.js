import utilStyles from "../styles/utils.module.css";
import Section from "./section";
import Social_icons from "./social_icons";
import Transition_title from "./transition_title";

export default function Get_in_touch(params) {
  return (
    <>
      <div className="bg-gray-150">
        <Section>
          <Transition_title>
            <h2 className={`${utilStyles.headingXl} text-center`}>
              Get In Touch
            </h2>
          </Transition_title>
          <Social_icons />
        </Section>
      </div>
    </>
  );
}
