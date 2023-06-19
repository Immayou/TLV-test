import { Provider } from "react-redux";
import reduxStore from "../redux/store";
import Layout from "@/components/layout";
import MainWrapper from "@/components/mainWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <MainWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainWrapper>
    </Provider>
  );
}
