// pages/contact.js
import Head from "next/head";
import Layout from "../components/layout";
import Transition_title from "../components/transition_title";
import utilStyles from "../styles/utils.module.css";
import Get_in_touch from "../components/get_in_touch";
import Section from "../components/section";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Contact | Portfolio</title>
      </Head>
      <div className="bg-blue-50 bg-gradient-to-tr from-indigo-200 via-zinc-50 to-blue-200">
        <Section>
          <Transition_title>
            <h1 className={utilStyles.headingXl}>
              Thank you for visiting my portfolio.
            </h1>
          </Transition_title>
          <div className="mt-2 pl-5 md:pl-8 py-3 border-l-4 border-blue-100 text-base md:text-lg">
            <p className="mb-4">
              Should you wish to discuss potential job opportunities or
              professional collaborations, please feel free to get in touch via
              email using the contact options below.
            </p>
            <p className="mb-4">
              I look forward to the possibility of working together.
            </p>
          </div>
        </Section>
      </div>
      <Get_in_touch />
    </Layout>
  );
}
