import React, { useCallback } from 'react';
import { FaDownload } from 'react-icons/fa';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';
import Title from '../../components/Title';
import Text from '../../components/Text';
import GeneralProjectLogo from '../../assets/images/general-project-logo.svg';

import { Container, Main, Editions, Edition } from './styles';

const PastEditions: React.FC = () => {
  const handleDownloadEditionCatalog = useCallback(() => {
    console.log('baixou');
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Title>O início</Title>
        <Text>
          A ação de extensão universitária é desenvolvida pelo Setor de Extensão
          da Escola de Comunicação da UFRJ. Sua primeira edição foi realizada em
          2008 enquanto um evento de extensão universitária, cujo principal
          produto era um concurso cultural. Os fotógrafos premiados costumavam
          contar ainda com exposição de seus trabalhos selecionados no campus
          universitário. Depois de mais de dez anos desde sua primeira edição, a
          equipe técnico-administrativa tem ainda como propósito a manutenção de
          acervo para memória do projeto, compilando as fotografias que
          integraram as diversas edições. Aberto ao público geral sem qualquer
          restrição, cada edição propunha um tema para reflexão e interpretação
          fotográfica livre. Veja abaixo detalhes de cada ano.
        </Text>
        <Editions>
          <Edition onClick={() => handleDownloadEditionCatalog()}>
            <img src={GeneralProjectLogo} alt="Catálogo histórico do Ecofoto" />
            <h4>veja todas as edições anteriores</h4>
            <FaDownload size={window.innerWidth > 600 ? 24 : 30} />
          </Edition>
          <Edition onClick={() => handleDownloadEditionCatalog()}>
            <img src={GeneralProjectLogo} alt="Catálogo histórico do Ecofoto" />
            <h4>edição x futuramente</h4>
            <FaDownload size={window.innerWidth > 600 ? 24 : 30} />
          </Edition>
          <Edition onClick={() => handleDownloadEditionCatalog()}>
            <img src={GeneralProjectLogo} alt="Catálogo histórico do Ecofoto" />
            <h4>edição y futuramente</h4>
            <FaDownload size={window.innerWidth > 600 ? 24 : 30} />
          </Edition>
        </Editions>
        <BackToTopButton />
      </Main>
      <Footer />
    </Container>
  );
};

export default PastEditions;
