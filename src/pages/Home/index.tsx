import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Main, Headings } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedButton from '../../components/DetailedButton';

import projectLogo from '../../assets/images/project-logo.svg';

const Home: React.FC = () => {
  const history = useHistory();
  const handleNavigate = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );

  return (
    <Container>
      <Header />
      <Main>
        <img src={projectLogo} alt="Ecofoto, retratos da pandemia" />
        <DetailedButton color="#F54A3F" onClick={() => handleNavigate('/expo')}>
          visite a exposição
        </DetailedButton>
        {window.innerWidth < 600 && (
          <Headings>
            <h2>workshops</h2>
            <h2>mentoria</h2>
            <h2>exposição</h2>
          </Headings>
        )}
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
