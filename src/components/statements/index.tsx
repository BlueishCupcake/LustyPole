import { Carousel } from "react-responsive-carousel";

import { statements } from "helpers/statements";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./style";

export const Statements: React.FC = () => {
  return (
    <>
      <S.StatementH2>O que estão dizendo sobre nós</S.StatementH2>
      <Carousel
        infiniteLoop
        autoPlay
        dynamicHeight
        interval={10000}
        showStatus={false}
        showIndicators={false}
      >
        {statements.map((statement) => {
          return (
            <S.StatementsBody key={statement.id}>
              <S.Statement>{statement.text}</S.Statement>

              <S.Author>{statement.author}</S.Author>
            </S.StatementsBody>
          );
        })}
      </Carousel>
    </>
  );
};
