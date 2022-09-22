import * as S from "./style";

export const Contacts: React.FC = () => {
  return (
    <S.ContactsSection>
      <S.PostsWrapper>
        <S.PoleDancer src="poledancer.png" />
      </S.PostsWrapper>

      <S.ContactsWrapper>
        <S.ContactsInfoWrapper>
          <h2>Mátriculas:</h2>

          <S.RegisterInfo>
            Para realizar a sua matrícula entre em contato conosco através do
            whats ou email.
          </S.RegisterInfo>

          <S.BtnWrapper>
            <S.Links
              href="https://api.whatsapp.com/send?phone=5551980606459&text=Ol%C3%A1%2C%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20de%20aulas%20de%20Pole%20Dance"
              target="_blank"
            >
              <img src="whatsapp.svg" />
              <S.ContactText>Mandar um zap</S.ContactText>
            </S.Links>

            <S.Links href="mailto:contato@lustypole.com" target="_blank">
              <img src="mail.svg" />

              <S.ContactText>Mandar um email</S.ContactText>
            </S.Links>
          </S.BtnWrapper>
        </S.ContactsInfoWrapper>

        <S.SocialMediaWrapper>
          <S.RegisterInfo>
            Já aproveita para nos seguir nas redes sociais e ficar por dentro de
            tudo que acontece na nossa escola!
          </S.RegisterInfo>

          <S.BtnWrapper>
            <S.Links
              href="https://www.instagram.com/lustypoledance/"
              target="_blank"
            >
              <img src="instagram.svg" />

              <S.ContactText>Instagram</S.ContactText>
            </S.Links>

            <S.Links
              href="https://www.tiktok.com/@poledanceportoalegre?_t=8Vs2wrjNHS2&_r=1"
              target="_blank"
            >
              <img src="tiktok.svg" />

              <S.ContactText>Tik Tok</S.ContactText>
            </S.Links>
          </S.BtnWrapper>
        </S.SocialMediaWrapper>
      </S.ContactsWrapper>
    </S.ContactsSection>
  );
};
