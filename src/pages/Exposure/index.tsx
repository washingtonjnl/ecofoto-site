/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Main,
  PhotoContainer,
  PhotoInfo,
  Photo,
  Footer,
} from './styles';

import expoImages from '../../assets/expo';
import projectLogoMonochromatic from '../../assets/images/project-logo-monochromatic.svg';
// import switchSound from '../../assets/sounds/switch-sound.mp3';

const Exposure: React.FC = () => {
  const [currentIndexLeft, setCurrentIndexLeft] = useState(0);
  const [currentIndexRight, setCurrentIndexRight] = useState(1);
  const [numbersDrawn, setNumbersDrawn] = useState([] as number[]);

  const drawNumber = useCallback(() => {
    const imagesLength = expoImages.length;
    const number = Math.floor(Math.random() * imagesLength);
    return number;
  }, []);

  const verifyDrawNumber = useCallback((drawToVerify: number) => {
    if (
      numbersDrawn.includes(currentIndexLeft) ||
      numbersDrawn.includes(currentIndexRight)
    ) {
      console.log(`repetiu o numero ${drawToVerify}`);
      return false;
    }
    return true;
  }, []);

  const switchPhoto = useCallback((index: number) => {
    // const audio = new Audio(switchSound);
    // tocar áudio

    let thisDraw = drawNumber();
    console.log(`sorteado o numero ${thisDraw}`);

    const verified = verifyDrawNumber(thisDraw);

    while (!verified) {
      thisDraw = drawNumber();
    }

    setNumbersDrawn([...numbersDrawn, thisDraw]);

    if (index === 0) {
      setCurrentIndexLeft(thisDraw);
    } else {
      setCurrentIndexRight(thisDraw);
    }
  }, []);

  // linha do tempo das trocas de imagens
  //  .   .   .   .   .   .   .   .   .   .
  //  .     .     .     .     .     .     .

  useEffect(() => {
    setInterval(() => switchPhoto(0), 3000);
    setInterval(() => switchPhoto(1), 5000);
  }, []);

  const history = useHistory();
  const handleNavigate = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );

  return (
    <Container>
      <Main>
        <PhotoContainer>
          <Photo>
            <img
              src={expoImages[currentIndexLeft].photo}
              alt={expoImages[currentIndexLeft].subtitle}
            />
          </Photo>

          <PhotoInfo>
            <h4>{expoImages[currentIndexLeft].photographer}</h4>
            <p>{expoImages[currentIndexLeft].subtitle}</p>
          </PhotoInfo>
        </PhotoContainer>
        <PhotoContainer>
          <Photo>
            <img
              src={expoImages[currentIndexRight].photo}
              alt={expoImages[currentIndexRight].subtitle}
            />
          </Photo>

          <PhotoInfo>
            <h4>{expoImages[currentIndexRight].photographer}</h4>
            <p>{expoImages[currentIndexRight].subtitle}</p>
          </PhotoInfo>
        </PhotoContainer>
      </Main>
      <Footer>
        <img
          src={projectLogoMonochromatic}
          alt="Ecofoto, retratos da pandemia."
          onClick={() => handleNavigate('/')}
        />
      </Footer>
    </Container>
  );
};

export default Exposure;
