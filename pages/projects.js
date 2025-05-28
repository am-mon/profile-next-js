// pages/projects.js
import Head from "next/head";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Projects | Portfolio</title>
      </Head>
      <Projects />
    </Layout>
  );
}
