import styled from "styled-components";

export const CustomTitle = styled.h2`
  color: var(--pink);
  text-align: center;
  font-size: 44px;
`;

export const CustomText = styled.p`
  padding: 0 24px;
  text-align: center;
  font-size: 20px;
`;

export const PaymentInfoBody = styled.div`
  width: 50%;
  padding: 0 124px;
  display: flex;
  flex-direction: column;
  place-items: center;

  @media (max-width: 810px) {
    width: 100%;
    padding: 0;
  }
`;

export const PricesBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  place-items: center;

  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const PriceInfoWrapper = styled.div`
  background-color: var(--pink);
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 24px;
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 24px;
`;

export const Price = styled.span`
  color: var(--white);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 28px;
  padding: 8px 0;
`;

export const PriceInfoText = styled.span`
  color: var(--white);
  font-weight: bold;
  text-transform: uppercase;
`;

export const InstructionsBody = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  place-content: center;
  place-items: center;
  background-color: var(--grey);
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  padding: 0px 80px;

  @media (max-width: 810px) {
    width: 100%;
    display: flex;
    flex-flow: column;
    padding: 0;
    gap: 40px;
  }
`;

export const InfoCard = styled.div`
  margin: 20px 80px;
`;

export const CardTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;

export const CardText = styled.span`
  font-size: 20px;
  line-height: 32px;
`;
