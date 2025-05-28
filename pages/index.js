import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Work_experience from "../components/work_experience";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Get_in_touch from "../components/get_in_touch";
import Script from "next/script";
import Footer from "../components/footer";

export default function Home() {
  // const posts = data.posts;
  // console.log(posts);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QKZ7FCCQ1R"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-QKZ7FCCQ1R');
        `}
      </Script>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Work_experience />
        <Skills />
        <Projects />
        <Get_in_touch />
        <Footer />
        {/* <Link href="posts/first-post">Post Page</Link> */}
      </Layout>
    </>
  );
}
