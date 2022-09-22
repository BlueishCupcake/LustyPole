import { Contacts } from "components/contacts";
import { GroupSection } from "components/groupSection";
import { Header } from "components/header";
import { Statements } from "components/statements";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <GroupSection />
      <Statements />
      <Contacts />
    </>
  );
};
