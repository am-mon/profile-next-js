import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Social_icons from "./social_icons";
import Transition from "./transition";
import Transition_image from "./transition_image";
import ScrollToTop from "./ScrollToTop";
import Transition_rotate from "./transition_rotate";

const name = "Aye Myat Mon";
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
      <header className="border-t-8 border-blue-500 ">
        {home ? (
          <div className={`utilStyles.home_head bg-blue-50`}>
            <Transition>
              <div className="py-20 px-4 text-center">
                <Transition_image>
                  <Image
                    priority
                    src="/assets/images/mon_3.png"
                    className="rounded-full mx-auto w-[180px] border-zinc-100 border-2 hover:border-4"
                    height={700}
                    width={700}
                    alt=""
                  />
                </Transition_image>
                <Transition_rotate back_repeat>
                  <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </Transition_rotate>
                <Transition back_repeat>
                  {/* <h2 className={utilStyles.headingLg}>
                    Front-End Web Developer
                  </h2> */}
                  <h2 className={utilStyles.headingLg}>
                    <b>Web Developer | Frontend & CMS&nbsp;Specialist</b> <br />
                    <span className="mt-2 inline-block text-xl">
                      JavaScript, React, Next.js, Vue, Tailwind,{" "}
                      <br className="sm:hidden" />
                      PHP, Python, SQL, WordPress, WooCommerce
                    </span>
                  </h2>
                  <Social_icons />{" "}
                </Transition>
              </div>
            </Transition>
          </div>
        ) : (
          <>
            {/* <Link href="/">
             <Image
                    priority
                    src="/assets/images/mon_3.png"
                    className="rounded-full mx-auto w-[170px] grayscale-[70%] hover:grayscale-0 cursor-pointer"
                    height={700}
                    width={700}
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
      <main>
        {children}
        <ScrollToTop />
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
