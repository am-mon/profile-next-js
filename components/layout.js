import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Social_icons from "./social_icons";
import Transition from "./transition";
import Transition_image from "./transition_image";

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
      <header>
        {home ? (
          <>
            <Transition>
              <div className="py-14 px-4 text-center bg-white">
                <Transition_image>
                  <Image
                    priority
                    src="/assets/images/mon_2.png"
                    className="rounded-full mx-auto w-[170px]"
                    height={700}
                    width={700}
                    alt=""
                  />
                </Transition_image>

                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <h2 className={utilStyles.headingLg}>
                  Front-End Web Developer
                </h2>
                <Social_icons />
              </div>
            </Transition>
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
