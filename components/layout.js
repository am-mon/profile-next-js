import Head from "next/head";
import ScrollToTop from "./ScrollToTop";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Script from "next/script";

export const siteTitle = "Portfolio";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Aye M. Mon's Portfolio – Web Developer | Frontend & CMS Specialist"
        />

        {/* Open Graph */}
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="A portfolio by Aye M. Mon – Web Developer | Frontend & CMS Specialist"
        />
        <meta
          property="og:image"
          content="https://myprofile.ayemyatmon.com/favicon.png"
        />
        <meta property="og:url" content="https://myprofile.ayemyatmon.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
      </Head>

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

      <header>
        <Nav />
      </header>
      <main className="pt-12 md:pt-14">
        {children}
        <ScrollToTop />
      </main>
      <Footer />
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
    </div>
  );
}
