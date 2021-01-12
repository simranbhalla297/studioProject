import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <>
        <Header />
        <Section1 />
        <Section2 />
        <Footer />
      </>
    </div>
  );
}

export default App;
