import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/scss/style.scss';
import PreLoader from './components/PreLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useRouter } from 'next/router';
import React, { useState, useEffect, useInsertionEffect } from 'react';

export default function App({ Component, pageProps, isHome }) {
  // Preloader
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <>
      <Head>
        <title>DebtSolutions Group</title>
        <meta name="description" content="Generated by DebtSolutions Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
