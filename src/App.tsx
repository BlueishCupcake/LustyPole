import Routes from "pages/routes";
import { Footer } from "./components/footer";
function App() {
  return (
    <>
      <p id="little-buddy" className="little-buddy">
        Âncora do site, favor não mexer!
      </p>
      <Routes />
      <Footer />
    </>
  );
}

export default App;
