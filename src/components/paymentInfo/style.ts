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
`;

export const PricesBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const PriceInfoWrapper = styled.div`
  background-color: var(--pink);
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 24px;
  width: 408px;
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
  display: flex;
  flex-flow: row wrap;
`;

export const InfoCard = styled.div`
  width: 480px;
  height: 240px;
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