import "@/styles/globals.css";

// pages/_app.js
import Navbar from "../components/Navbar.js";
import Subheader from "@/components/SubHeader.js";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Subheader/>
      <main>
        <Component {...pageProps} />
      </main>
      
    </>
  )
}

export default MyApp
