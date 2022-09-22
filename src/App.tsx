import { Contacts } from "components/contacts";
import { Footer } from "./components/footer";
import { GroupSection } from "./components/groupSection";
import { Header } from "./components/header";
import { Statements } from "./components/statements";

function App() {
  return (
    <div>
      <Header />
      <GroupSection />
      <Statements />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
