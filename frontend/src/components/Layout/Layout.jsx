import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
