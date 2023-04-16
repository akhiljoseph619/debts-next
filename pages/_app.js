import "bootstrap/dist/css/bootstrap.css";
import "@/styles/scss/style.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PreLoader from "./components/preLoader";

export default function App({ Component, pageProps, isHome }) {
  // Preloader
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  // End preloader
  return (
    <>
      {isHome && isLoading && <PreLoader />}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
