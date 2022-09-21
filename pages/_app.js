import '../styles/globals.css'
import  {useRouter}  from 'next/router';
function MyApp({ Component, pageProps }) {
  // console.log(Component);
  const router  = useRouter();
  console.log(router.asPath);
  return <Component {...pageProps} />
}

export default MyApp;