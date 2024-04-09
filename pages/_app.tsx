import "@/styles/globals.css";
import { QueryProvider } from "@/util/QueryProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <QueryProvider> <Component {...pageProps} /></QueryProvider>;
}
