import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-netlify" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
