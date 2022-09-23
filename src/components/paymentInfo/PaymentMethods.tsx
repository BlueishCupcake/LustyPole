import * as S from "./style";

export const PaymentMethods: React.FC = () => {
  return (
    <>
      <S.PaymentInfoBody>
        <S.CustomTitle>Formas de pagamento</S.CustomTitle>

        <S.CustomText>
          Adquira nossos pacotes de aulas sem sair de casa, de forma totalmente
          digital!
        </S.CustomText>

        <S.CustomText>
          Trabalhamos com dinheiro, PIX, cartão de crédito e recorrência. Você
          escolhe a forma de pagamento que melhor se adapta a sua organização
          financeira e ainda recebe descontos incríveis.
        </S.CustomText>

        <S.CustomText>
          Todas as nossas aulas têm duração de uma hora.
        </S.CustomText>

        <S.CustomText>
          Recorrência: todo mês é descontado automaticamente de sua conta o
          valor mensal - necessário cartão de crédito. Descontos não
          cumulativos.
        </S.CustomText>
      </S.PaymentInfoBody>
    </>
  );
};
