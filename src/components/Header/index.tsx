import React, { useCallback, useEffect, useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Container, Navigation, NavItem } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsDesktop(true);
      setMenuVisibility(true);
    }
  }, []);

  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleToggleMenuVisible = useCallback(() => {
    setMenuVisibility(!menuVisibility);
  }, [menuVisibility]);

  const handleNavigate = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );

  return (
    <Container>
      <Navigation style={{ visibility: menuVisibility ? 'visible' : 'hidden' }}>
        <ul>
          <NavItem id="expo" onClick={() => handleNavigate('expo')}>
            visite a exposição
          </NavItem>
          <NavItem id="sobre" onClick={() => handleNavigate('sobre')}>
            sobre o projeto
          </NavItem>
          <NavItem
            id="palestrantes"
            onClick={() => handleNavigate('palestrantes')}
          >
            palestrantes
          </NavItem>
          <NavItem
            id="participantes"
            onClick={() => handleNavigate('participantes')}
          >
            participantes
          </NavItem>
          <NavItem
            id="edicoes-anteriores"
            onClick={() => handleNavigate('edicoes-anteriores')}
          >
            edições anteriores
          </NavItem>
        </ul>
      </Navigation>

      {!isDesktop && <FaBars size={28} onClick={handleToggleMenuVisible} />}
    </Container>
  );
};

export default Header;
