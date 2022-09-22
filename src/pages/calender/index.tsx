import { Header } from "components/header";

import { CalendarsWrapper, CalendarImg } from "./style";

export const Calender: React.FC = () => {
  return (
    <>
      <Header />
      <CalendarsWrapper>
        <CalendarImg src="janeiro.png" alt="Calendário Janeiro" />
        <CalendarImg src="fevereiro.png" alt="Calendário Fevereiro" />
        <CalendarImg src="março.png" alt="Calendário Março" />
        <CalendarImg src="abril.png" alt="Calendário Abril" />
        <CalendarImg src="maio.png" alt="Calendário Maio" />
        <CalendarImg src="junho.png" alt="Calendário Junho" />
      </CalendarsWrapper>
    </>
  );
};
