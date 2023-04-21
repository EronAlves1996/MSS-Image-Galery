import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const pathname = router.pathname;

  return (
    <>
      <Navbar {...{ pathname }} />
      <Component {...pageProps} />;
    </>
  );
}
