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
      return false;
    }
    return true;
  }, []);

  const switchPhoto = useCallback((index: number) => {
    let thisDraw = drawNumber();

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

  useEffect(() => {
    setInterval(() => switchPhoto(0), 4000);
    setInterval(() => switchPhoto(1), 6000);
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
            {expoImages[currentIndexLeft].serie !== '' ? (
              <>
                <p>{expoImages[currentIndexLeft].serie}</p>
                <p>{expoImages[currentIndexLeft].subtitle}</p>
              </>
            ) : (
              <>
                <p>{expoImages[currentIndexLeft].subtitle}</p>
                <p className="nothing">|</p>
              </>
            )}
          </PhotoInfo>
        </PhotoContainer>
        <PhotoContainer>
          <Photo>
            <img
              src={expoImages[currentIndexRight].photo}
              alt={expoImages[currentIndexRight].subtitle}
            />
          </Photo>

          <PhotoInfo className="right">
            <h4>{expoImages[currentIndexRight].photographer}</h4>
            {expoImages[currentIndexRight].serie !== '' ? (
              <>
                <p>{expoImages[currentIndexRight].serie}</p>
                <p>{expoImages[currentIndexRight].subtitle}</p>
              </>
            ) : (
              <>
                <p>{expoImages[currentIndexRight].subtitle}</p>
                <p className="nothing">|</p>
              </>
            )}
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
