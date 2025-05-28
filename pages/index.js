import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Work_experience from "../components/work_experience";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Get_in_touch from "../components/get_in_touch";

import Home_top from "../components/home_top";

export default function Home() {
  // const posts = data.posts;
  // console.log(posts);

  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Home_top />
        <Work_experience />
        <Skills />
        <Projects />
        <Get_in_touch />

        {/* <Link href="posts/first-post">Post Page</Link> */}
      </Layout>
    </>
  );
}
