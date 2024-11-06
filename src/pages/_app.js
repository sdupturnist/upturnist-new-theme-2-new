import NoInternetConnection from "@/components/NoConnection";
import "../../public/styles/globals.min.css";
//import "../../public/styles/tempstyle.css";
import { ModalContextProvider } from "@/context/modalContext";
import { ThemeProvider } from "@/context/themeContext";
import { SiteProvider } from "@/context/siteContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NoInternetConnection>
        <ThemeProvider>
          <SiteProvider>
            <ModalContextProvider>
              <Component {...pageProps} />
            </ModalContextProvider>
          </SiteProvider>
        </ThemeProvider>
      </NoInternetConnection>
    </>
  );
}
