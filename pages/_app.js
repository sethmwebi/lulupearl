import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import axios from "axios";
import store from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

let persistor = persistStore(store);
axios.defaults.baseURL = process.env.HOST;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher: (url) => axios(url).then((res) => res.data),
          dedupingInterval: 1000000,
          revalidateOnFocus: true,
        }}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {getLayout(<Component {...pageProps} />)}
          </PersistGate>
        </Provider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
