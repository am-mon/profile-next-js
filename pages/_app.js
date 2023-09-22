// `pages/_app.js`
import "../styles/global.css";
import "../styles/transition.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
