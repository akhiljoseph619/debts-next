import "bootstrap/dist/css/bootstrap.css";
import "@/styles/scss/style.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
