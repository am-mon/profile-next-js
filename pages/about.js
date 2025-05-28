// pages/about.js
import Head from "next/head";
import Layout from "../components/layout";
import About_me from "../components/about_me";
import Work_experience from "../components/work_experience";
import Skills from "../components/skills";
import Get_in_touch from "../components/get_in_touch";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me | Portfolio</title>
      </Head>
      <About_me />
      <Work_experience />
      <Skills />
      <Get_in_touch />
    </Layout>
  );
}
