import React from 'react';
import { FaDownload } from 'react-icons/fa';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';
import Title from '../../components/Title';
import Text from '../../components/Text';
import GeneralProjectLogo from '../../assets/images/general-project-logo.svg';

import generalCatalog from '../../assets/files/pastEditions/ecofoto-historico.pdf';

import { Container, Main, Editions, Edition } from './styles';

const PastEditions: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Title>O início</Title>
        <Text>
          O Ecofoto é uma ação de extensão desenvolvida pelo Setor de Extensão
          da Escola de Comunicação da UFRJ. Sua primeira edição foi realizada em
          2008, no formato de concurso, e desde então tinha como principal
          resultado uma exposição no campus universitário e a publicação de um
          catálogo de memória dos trabalhos selecionados. Aberto ao público
          geral sem qualquer restrição, cada edição propunha um tema para
          reflexão e interpretação fotográfica livre. Depois de mais de dez anos
          desde seu início, a equipe técnico-administrativa tem ainda como
          propósito a manutenção de acervo para memória do projeto, compilando
          as fotografias que integraram as diversas edições.Veja abaixo detalhes
          de cada ano.
        </Text>
        <Editions>
          <Edition
            href={generalCatalog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GeneralProjectLogo} alt="Catálogo histórico do Ecofoto" />
            <h4>veja todas as edições anteriores</h4>
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
