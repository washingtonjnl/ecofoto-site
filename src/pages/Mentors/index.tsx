import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';
import Title from '../../components/Title';

import projectLogo from '../../assets/images/project-logo.svg';

import { Container, Main, Mentor } from './styles';

const Mentors: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <img src={projectLogo} alt="Ecofoto, retratos da pandemia" />
        <Title>Quem são os palestrantes do projeto?</Title>
        <Mentor>
          <span>Alexandre Sequeira</span>
          <p>
            Artista visual, doutor em Arte pela Universidade Federal de Minas
            Gerais e professor do Instituto de Ciências da Arte da Universidade
            Federal do Pará. Desenvolve trabalhos que estabelecem relações
            entre fotografia e alteridade social, tendo participado de Encontros
            de Fotografia, Seminários e Exposições no Brasil e exterior. Tem
            obras no acervo do Museu da UFPA, Espaço Cultural Casa das 11
            Janelas, Coleção Pirelli do Museu de Arte de São Paulo (MASP), Museu
            de Arte do Rio (MAR), Museu de Arte Contemporânea do Rio Grande do
            Sul, Museu da Fotografia do Ceará e Coleção de Fotografia da
            Associação Brasileira de Arte Contemporânea (ABAC).
          </p>
        </Mentor>
        <Mentor>
          <span>Alessandra Vannucci</span>
          <p>
            Diretora de teatro e dramaturga italiana, é residente do Brasil
            desde 2009, atuando como professora da Escola de Comunicação da
            UFRJ. Leciona Direção, Processos de Criação e de Linguagem
            Fotográfica. É pesquisadora (CNPq, FAPERJ) com diversos livros
            publicados. Atualmente é pesquisadora bolsista do Instituto Moreira
            Salles (IMS-Rio), que conserva o maior acervo fotográfico do país.
          </p>
        </Mentor>
        <Mentor>
          <span>Aline Macedo</span>
          <p>
            Fotógrafa e artista visual, é formada em Literaturas pela
            Universidade Federal do Rio de Janeiro e pós-graduada em Fotografia
            e Imagem pelo Instituto Universitário de Pesquisas do Rio de
            Janeiro. Desenvolve um trabalho de pesquisa fotográfica através das
            temáticas do corpo feminino, da identidade e da memória. Sua prática
            também inclui a arte-educação, tendo colaborado em diversos projetos
            de extensão, pesquisa e ensino em Fotografia, como o Investigações
            Fotográficas, do CapUFRJ, propondo atividades, oficinas e debates
            sobre o fazer fotográfico e a prática de ensino do olhar. Atualmente
            vive e trabalha em Lisboa.
          </p>
        </Mentor>
        <Mentor>
          <span>Felipe Camilo</span>
          <p>
            Negro. Cearense. Nordestino. Artista Visual com enfoque em
            fotografia e cinema. Dedica-se ao documental e à experimentação.
            Pesquisador pela UFC/CAPES, desenvolve tese nas áreas de
            antropologia, imagem, memória e cidade.  Publicou o fotolivro do
            projeto Perecível em 2018 com fitotipia, relatos e haicais. Expôs o
            trabalho na Fotográfica Bogotá em 2019. É realizador do documentário
            Oestemar (Projeto MAPADOC 2019/2020) e do curta-metragem Memórias do
            Subsolo ou o Homem que cavou até encontrar uma redoma. O roteiro foi
            premiado no Cine Ceará 2017.
          </p>
        </Mentor>
        <Mentor>
          <span>Fernando Maia da Cunha</span>
          <p>
            Mestre  em  Comunicação - Fotografia  e  Audiovisual - na
            Universidade Federal do Ceará. Formado em  Belas  Artes na 
            Pontífica Universidade Católica – Rio de Janeiro. Cursou 
            especialização  em  Fotografia  e  Vídeo  na  NORDIC 
            FOLKHIGHSCHOOL  BISKOPS  ARNÖ, Suécia, e tem Pós-Graduação em
            Fotografia, Imagem e Comunicação na  Universidade  Cândido  Mendes,
            Rio de Janeiro. Atualmente é doutorando em  Psicologia na 
            Universidade  Federal do Ceará. Fotógrafo, Diretor  de fotografia e
            Professor Universitário efetivo da Universidade Federal do Ceará, no
            Instituto  de  Cultura e Arte. É sócio efetivo da ABC – Associação
            Brasileira de Cinematografia. Líder do GAEIC (Grupo de Análises e
            Estudos da Imagem Contemporânea).
          </p>
        </Mentor>
        <Mentor>
          <span>Joyce Abbade</span>
          <p>
            Fotógrafa, Museóloga e Cientista Social, também possui pós-graduação
            em Fotografia pelo Instituto Universitário de Pesquisas do Rio de
            Janeiro - Universidade Cândido Mendes (IUPERJ/UCAM). Formada em
            Museologia pela Universidade Federal do Estado do Rio de Janeiro
            (UNIRIO) e Ciências Sociais pela Universidade Federal do Rio de
            Janeiro (UFRJ). Mestranda no Programa de Pós-Graduação em Memória
            Social (UNIRIO). Atualmente desenvolve um trabalho artístico
            fotografando antigos cinemas de rua do subúrbio carioca. Seus temas
            de interesse estão voltados para questões sociais e urbanas, focados
            na temática dos negros, mulheres, periferia e cidade. Acredita que
            produzir imagens seja uma forma de propor diálogos que possibilitem
            a criação de outras narrativas e memórias possíveis.
          </p>
        </Mentor>
        <Mentor>
          <span>Júnior Franco</span>
          <p>
            Cursou Fotografia pelo SENAC-RJ, profissionalizou-se como Repórter
            Fotográfico e hoje é Pós-Graduado em Fotografia e Imagem pelo
            Instituto Universitário de Pesquisas do Rio de Janeiro –
            Universidade Candido Mendes. Integra a coleção Joaquim Paiva de
            fotografia brasileira contemporânea, incorporada ao acervo do Museu
            de Arte Moderna do Rio (MAM-RJ). Vencedor do 7º Salão de Artes
            Visuais de Niterói 2019.
          </p>
        </Mentor>
        <BackToTopButton />
      </Main>
      <Footer />
    </Container>
  );
};

export default Mentors;
