import { Provider } from "react-redux";
import { SWRConfig } from "swr"
import axios from "axios"
import store from "../redux/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"

axios.defaults.baseURL = process.env.HOST

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
    <SWRConfig value={{fetcher: (url) => axios(url).then(res => res.data), dedupingInterval: 1000000, revalidateOnFocus: true}}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
