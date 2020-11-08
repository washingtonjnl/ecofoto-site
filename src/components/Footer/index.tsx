import React from 'react';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from './styles';

import footerLogo from '../../assets/images/footer-logos.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={footerLogo} alt="Extensões da ECO-UFRJ" />
      <div>
        <a
          href="https://www.facebook.com/ufrj.escoladecomunicacao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={28} />
        </a>

        <a
          href="https://www.instagram.com/ecofotoufrj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={28} />
        </a>

        <a
          href="https://www.youtube.com/channel/UC5kubER8QtBJphR9-5LVtOQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={28} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
