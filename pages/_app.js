import '../styles/globals.css'
import  {useRouter}  from 'next/router';
import Layout from '../components/layout';
import { Provider, useDispatch } from 'react-redux';
import {  authActions, store } from '../store';
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
export async function getServerSideProps(context){
  // const dispatch = useDispatch();
  const user = await serverRequest("auth/currentUser","GET");
  console.log("111111111111111: ",user);
  return {
    props:{
      user
    }
  }
}





export default MyApp;