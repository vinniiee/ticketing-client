import '../styles/globals.css'
import  {useRouter}  from 'next/router';
import Layout from '../components/layout';
import { Provider, useDispatch } from 'react-redux';
import {  store } from '../store';
function MyApp({ Component, pageProps }) {
  // console.log(Component);
  const router  = useRouter();
  

  console.log(router.asPath);
  
  if(router.asPath=="/"){
    return <Component {...pageProps} />
  }
  else{
    return <Provider store={store}> <Layout>
        <Component {...pageProps} />
    </Layout></Provider>
  }


}





export default MyApp;