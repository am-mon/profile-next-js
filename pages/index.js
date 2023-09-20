import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Work_experience from "../components/work_experience";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Get_in_touch from "../components/get_in_touch";

export default function Home() {
  // const posts = data.posts;
  // console.log(posts);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {/* <Introduction /> */}
        <Work_experience />
        <Skills />
        <Projects />
        <Get_in_touch />

        {/* <Link href="posts/first-post">Post Page</Link> */}
      </section>
    </Layout>
  );
}
