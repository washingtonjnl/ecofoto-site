import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';

import { Container, Main } from './styles';

const Photographers: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h1>Eles ainda vão enviar o conteúdo</h1>
        <BackToTopButton />
      </Main>
      <Footer />
    </Container>
  );
};

export default Photographers;
