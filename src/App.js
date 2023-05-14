import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousal from "./components/Carousal";
import ProductsSections from "./components/ProductsSections";
import AppContextProvider from "./store/AppContextProvider";


function App() {

  return (

    <AppContextProvider>
      <Navbar />
      <Carousal />
      <ProductsSections />
      <Footer />

    </AppContextProvider>

  );
}

export default App;
