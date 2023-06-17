import Layout from "@/components/layout";
import MainWrapper from "@/components/mainWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <MainWrapper>
        <Component {...pageProps} />
      </MainWrapper>
    </Layout>
  );
}
