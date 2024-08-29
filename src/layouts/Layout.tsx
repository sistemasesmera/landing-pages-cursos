import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import backgroundImage from "../assets/background.jpg"; // Importa la imagen

interface MainLayoutProps {
  children: React.ReactNode; // Propiedad para el contenido de las páginas
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
