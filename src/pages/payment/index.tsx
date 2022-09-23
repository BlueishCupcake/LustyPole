import { Header } from "components/header";
import { PaymentMethods } from "components/paymentInfo/PaymentMethods";
import { Prices } from "components/paymentInfo/Prices";
import { RegisterInstructions } from "components/paymentInfo/RegisterInstructions";

import * as S from "./style";

export const Payment: React.FC = () => {
  return (
    <>
      <Header />
      <S.PaymentBody>
        <PaymentMethods />

        <Prices />

        <RegisterInstructions />
      </S.PaymentBody>
    </>
  );
};
