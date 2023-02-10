import type { AppProps } from "next/app";

import { Poppins } from "@next/font/google";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={poppins.className}>
        <GlobalStyles />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
