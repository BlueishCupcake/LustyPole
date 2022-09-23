import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Header } from "components/header";
import * as S from "./style";

export const About: React.FC = () => {
  return (
    <>
      <Header />
      <S.AboutBody>
        <S.HistorySection>
          <S.Title>Quem Somos:</S.Title>

          <S.SubTitle>
            Reconhecimento pela criatividade, dedicação e qualidade no ensino de
            Pole Dance
          </S.SubTitle>

          <S.Paragraph>
            A Lusty iniciou suas atividades em agosto de 2015, sendo idealizada
            por Renata Gralha Mateus. Desde então estamos localizadas na Rua
            Lopo Gonçalves, 677, sendo o primeiro estúdio na região central da
            capital gaúcha. Obviamente escolhemos o bairro mais democrático da
            cidade, a Cidade Baixa, para firmarmos nossas raízes. Surgimos da
            necessidade de Porto Alegre ter um espaço especializado em Pole
            Dance que aprovasse todas as vertentes independente do gênero, dando
            liberdade para você ser quem quiser ser. Nós transformamos vidas por
            meio do Pole dance e todas as artes que o englobam, fortalecendo o
            seu equilíbrio físico e emocional, em um ambiente seguro e livre de
            rótulos. Permitimos às pessoas vivenciarem tudo o que essa dança
            envolve como forma de auto expressão, possibilitando o encontro do
            seu eu dançante.
          </S.Paragraph>

          <S.Paragraph>
            Temos em nosso DNA responsabilidade, empatia, criatividade,
            diversidade, qualidade, liberdade e dedicação, além de sermos
            movidas pela paixão por ensinar. ​
          </S.Paragraph>
        </S.HistorySection>

        <S.PhotoSection>
          <Carousel
            infiniteLoop
            autoPlay
            dynamicHeight
            interval={6000}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            centerMode
            emulateTouch
            centerSlidePercentage={40}
          >
            <S.Photo src="photo_1.jpg" />
            <S.Photo src="photo_2.jpg" />
            <S.Photo src="photo_3.jpg" />
            <S.Photo src="photo_4.jpg" />
            <S.Photo src="photo_5.jpg" />
            <S.Photo src="photo_6.jpg" />
            <S.Photo src="photo_7.jpeg" />
            <S.Photo src="photo_8.jpg" />
          </Carousel>
        </S.PhotoSection>

        <S.WorkSection>
          <S.SubTitle>
            Trabalhamos com a melhor equipe de instrutoras Pole Dance do Rio
            Grande do Sul
          </S.SubTitle>

          <S.Paragraph>
            Nossa equipe é amplamente qualificada, estamos em constante
            evolução, sempre investindo em conhecimento para garantir aos nossos
            alunes a melhor experiência possível e exploração do Pole Dance. O
            método de ensino consciente e progressivo é exclusivo da Lusty e foi
            desenvolvido pelo nossa idealizadora Renata, ao longo dos seus sete
            anos como professora e estudiosa da modalidade. Para garantir a
            qualidade técnica da equipe, ela faz o treinamento e acompanhamento
            das instrutoras do estúdio, dando todo suporte técnico necessário.
          </S.Paragraph>
        </S.WorkSection>

        <S.VideoSection>
          <S.SubTitle>
            Experimente a energia da Lusty! O vídeo abaixo foi realizado em um
            dos eventos da casinha cor de cereja pela @larethianfilmes
          </S.SubTitle>
          <S.Video
            src="https://www.youtube.com/embed/734LimfB5P0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></S.Video>
        </S.VideoSection>
      </S.AboutBody>
    </>
  );
};
