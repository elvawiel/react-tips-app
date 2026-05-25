import Header from "./Header";
import Footer from "./Footer";
import CookiePolicy from "./CookiePolicy";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <div id="main" className="container">
          {children}
        </div>
      </main>

      <Footer />

      <CookiePolicy />
    </>
  );
}

export default Layout;
