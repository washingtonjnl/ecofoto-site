import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';
import Title from '../../components/Title';
import Caption from '../../components/Caption';
import Text from '../../components/Text';

import projectLogo from '../../assets/images/project-logo.svg';

import photographersData from '../../utils/PhotographersData';
import expoImages from '../../assets/expo';

import { Container, Main, Gallery, Photo } from './styles';

const About: React.FC = () => {
  const history = useHistory();

  const photographerId = Number(history.location.search.substr(4));

  const photographer = photographersData[photographerId];

  const photographerGallery = expoImages.filter(
    image => image.photographer === photographer.name,
  );

  return (
    <Container>
      <Header />
      <Main>
        <img src={projectLogo} alt="Ecofoto, retratos da pandemia" />
        <Title>{photographer.name}</Title>
        <Text>{photographer.bio}</Text>
        <Caption>Galeria Individual</Caption>
        <Gallery>
          {photographerGallery.map(photo => (
            <Photo>
              <img src={photo.photo} alt={photo.subtitle} />
              {photo.serie !== '' && <p className="serie">{photo.serie}</p>}
              <p>{photo.subtitle}</p>
            </Photo>
          ))}
        </Gallery>
        <BackToTopButton />
      </Main>
      <Footer />
    </Container>
  );
};

export default About;
