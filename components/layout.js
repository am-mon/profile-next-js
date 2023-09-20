import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Aye M. Mon";
export const siteTitle = "Portfolio";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Portfolio" content="Aye M. Mon's Portfolio" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className="py-10 px-4 text-center">
              <Image
                priority
                src="/assets/images/mon.jpg"
                className="rounded-full mx-auto"
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <h2 className={utilStyles.headingLg}>Front-End Web Developer</h2>
            </div>
          </>
        ) : (
          <>
            {/* <Link href="/">
              <Image
                priority
                src="/assets/images/mon.jpg"
                className="rounded-full"
                height={144}
                width={144}
                alt=""
              />
            </Link> */}
            {/* <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
