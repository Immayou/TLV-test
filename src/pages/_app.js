import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@/components/layout";
import MainWrapper from "@/components/mainWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainWrapper>
      </PersistGate>
    </Provider>
  );
}
