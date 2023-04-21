import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const pathname = router.pathname;

  return <Temporary {...{ Component, pageProps, pathname }} />;
}

function Temporary({
  pathname,
  pageProps,
  Component,
}: {
  pathname: string;
  pageProps: any;
  Component: NextComponentType<NextPageContext, any, any>;
}) {
  return (
    <>
      <Navbar {...{ pathname }} />
      <Component {...pageProps} />
    </>
  );
}
