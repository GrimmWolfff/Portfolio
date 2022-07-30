//!TODO: ADMIN DASHBOARD -> TEXT EDITOR / ADD POST
//!TODO: CRUD OPERATIONS FOR POSTS
//!TODO: Upload images with multer

import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
  function MyApp({ Component, pageProps }) {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
}

export default MyApp