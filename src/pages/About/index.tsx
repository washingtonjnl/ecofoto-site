import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';
import Title from '../../components/Title';
import Caption from '../../components/Caption';
import Text from '../../components/Text';

import projectLogo from '../../assets/images/project-logo.svg';

import { Container, Main, List, Calendar, Point, Photographer } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <img src={projectLogo} alt="Ecofoto, retratos da pandemia" />
        <Title>Sobre o projeto</Title>
        <Text>
          O projeto de extensão universitária <i>Ecofoto</i> objetiva sedimentar
          o papel da fotografia enquanto a arte de capturar e eternizar o
          próprio tempo valorizando a formação de novos profissionais de
          comunicação e artes visuais. Como forma de valorização da produção
          fotográfica pulsante e plural que pipoca aqui e ali nas periferias, o
          corpo técnico-administrativo do Setor de Extensão da Escola de
          Comunicação da Universidade Federal do Rio de Janeiro procura
          evidenciar e consolidar a ideia de que a fotografia é algo mutante e
          incessantemente ressignificada. Técnicas fotográficas são renovadas
          diante de cenários e contextos sociais desafiadores.
        </Text>
        <Text>
          Enquanto projeto realizado há mais de dez anos pela Escola de
          Comunicação, o Ecofoto entendeu que, para a comemoração de cem anos da
          UFRJ, precisava se renovar. A necessidade de se redescobrir em sua 8ª
          edição bateu à porta justamente pelas limitações operacionais
          constituídas durante a pandemia, que inviabilizou de imediato para a
          equipe a realização de diversos produtos próprios do projeto até o
          momento.
        </Text>
        <Text>
          Interessado em conhecer novas técnicas fotográficas, criadas e
          expressas a partir da diversidade da realidade social que se desdobra
          diante do olhar do fotógrafo, o projeto procura se constituir como
          espaço excepcional para troca de saberes. O encontro promovido na
          ocasião de sua realização busca experimentar novos lugares, onde
          criadores, artistas, fotógrafos e pesquisadores ensaiam fissuras sobre
          as narrativas convencionais que nos cercam durante o dia-a-dia. Ao
          projetar ficções alternativas, vislumbramos meios de nos conectar com
          o outro nunca antes pensadas como possíveis, mas que eram latentes.
        </Text>
        <Text>
          Através da reunião de diferentes olhares e perspectivas sobre o
          cotidiano e a intimidade das pessoas neste contexto delicado de
          pandemia no Brasil, retratos surgem como uma forma de se apresentar ao
          outro, de convidar o olhar alheio a estar presente e consciente sobre
          sua diferença. Pela disparidade, pela diversidade, pela diferença, nos
          unimos.
        </Text>
        <Caption>Ciclo de criação:</Caption>
        <Text>
          Com este propósito, a equipe do Setor de Extensão oferta à comunidade
          extramuros da universidade ciclo intensivo de criação que conta com
          <i>workshop</i> online sobre a linguagem fotográfica contemporânea e
          programa de mentoria sobre fotografia com o celular. A proposta é
          produzir ao fim deste ciclo uma série inédita de retratos sobre a
          pandemia com os participantes. As vagas se destinam àqueles que têm
          pouca ou nenhuma experiência com fotografia pela câmera celular, mas
          são curiosos em arriscar, testar, errar, e não se veem necessariamente
          como profissionais ainda.
        </Text>
        <Text>
          O <i>workshop</i> online, que acontece de 26 a 30 de outubro de 2020,
          é completamente gratuito. O projeto de extensão universitária reúne
          docentes da Universidade Federal do Pará, Universidade Federal do
          Ceará e, claro, da Universidade Federal do Rio de Janeiro. Durante o
          programa de mentoria, com duração de duas semanas, os participantes
          terão acesso a um conteúdo educativo denso com exercícios práticos que
          auxiliem no processo criativo compartilhado. Contando com o feedback
          dos fotógrafos colaboradores, o ciclo de criação se encerra na
          submissão dos retratos produzidos pelos participantes. Na sequência, a
          série inédita de retratos será exibida em exposição virtual
          desenvolvida especialmente para a ação -- lançamento de catálogo para
          o início de 2021. A exposição online inaugura dia 17 de novembro de
          2020 com grande evento de abertura.
        </Text>
        <Caption>Ações:</Caption>
        <List>
          <li>
            Criação de parcerias entre a universidade e outras instituições de
            ensino e organizações da sociedade civil que fomentam a formação de
            fotógrafos;
          </li>
          <li>
            Convocação de alunos da universidade para integrar equipe de
            produção do projeto, especialmente nas áreas de comunicação,
            jornalismo, história da arte e tecnologia da computação;
          </li>
          <li>
            Construção de conteúdo programático educativo que vise à valorização
            de técnicas contemporâneas de fotografia junto aos fotógrafos
            parceiros, professores e pesquisadores universitários;
          </li>
          <li>
            Inauguração e manutenção de canais de comunicação pelas redes
            sociais que divulguem, através da criação de conteúdo e{' '}
            <i>inbound marketing,</i> as ações do projeto;
          </li>
          <li>
            Realização de <i>talks online</i> com fotógrafos nas redes sociais
            da ação de extensão;
          </li>
          <li>
            Seleção de novos talentos interessados em participar do projeto;
          </li>
          <li>
            Realização de <i>workshop</i> intensivo sobre linguagem fotográfica
            contemporânea;
          </li>
          <li>Realização de programa de mentoria;</li>
          <li>
            Criação de set de fotografias com os alunos participantes para a
            exposição “Retratos da Pandemia”;
          </li>
          <li>
            Curadoria e desenvolvimento de sítio eletrônico para exposição
            online;
          </li>
          <li>Exposição virtual “Retratos da Pandemia”;</li>
          <li>Produção de catálogo virtual da exposição.</li>
        </List>
        <Caption>
          Calendário da 8ª edição Ecofoto - Retratos da Pandemia
        </Caption>
        <Calendar>
          <Point>
            <span>05/10/2020 à 11/10/2020</span>
            <p>
              inscrições para participar do ciclo de <i>workshop</i> + mentoria
              + criação de retratos.
            </p>
          </Point>
          <Point>
            <span>22/10/2020</span>
            <p>
              evento de abertura do ciclo de criação do projeto no canal da
              Escola de Comunicação da UFRJ no YouTube. Antonio Fatorelli
              entrevista Alexandre Sequeira.
            </p>
          </Point>
          <Point>
            <span>26/10/2020 à 30/10/2020</span>
            <p>
              realização do <i>workshop</i> online.
            </p>
          </Point>
          <Point>
            <span>26/10/2020 à 08/11/2020</span>
            <p>programa de mentoria online.</p>
          </Point>
          <Point>
            <span>09/11/2020</span>
            <p>submissão da série inédita de retratos.</p>
          </Point>
          <Point>
            <span>17/11/2020</span>
            <p>
              inauguração da exposição virtual <b>Retratos da Pandemia.</b>
            </p>
          </Point>
          <Point>
            <span>17/11/2020 à 17/02/2021</span>
            <p>visitação aberta ao público da exposição virtual.</p>
          </Point>
        </Calendar>
        <Caption>
          Programação completa as aulas do <i>workshop</i>
        </Caption>
        <Calendar>
          <Point>
            <span>26/10/2020</span>
            <p>
              <b>Alexandre Sequeira (UFPA)</b>
            </p>
            <p>
              <i>Poéticas do encontro</i>
            </p>
          </Point>
          <Point>
            <span>27/10/2020</span>
            <p>
              <b>Fernando Maia da Cunha (UFC)</b>
            </p>
            <p>
              <i>
                Narrativas de si, memória e esquecimento nas poéticas visuais:
                caminhos da criação e edição na fotografia
              </i>
            </p>
          </Point>
          <Point>
            <span>28/10/2020</span>
            <p>
              <b>Alessandra Vannucci (UFRJ)</b>
            </p>
            <p>
              <i>Retratos roubados e retratos de ausências</i>
            </p>
          </Point>
          <Point>
            <span>29/10/2020</span>
            <p>
              <b>Joyce Abbade, Alice Macedo e Junior Franco</b>
            </p>
            <p>
              <i>A experiência da produção coletiva de retratos</i>
            </p>
          </Point>
          <Point>
            <span>30/10/2020</span>
            <p>
              <b>Felipe Camilo (UFC)</b>
            </p>
            <p>
              <i>
                Imagem, memória, negritude: Nossos álbuns entre o pixel e o
                papel
              </i>
            </p>
          </Point>
        </Calendar>
        <Caption>Sobre os fotógrafos colaboradores</Caption>
        <Photographer>
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
        </Photographer>
        <Photographer>
          <span>Alessandra Vannucci</span>
          <p>
            Diretora de teatro e dramaturga italiana, é residente do Brasil
            desde 2009, atuando como professora da Escola de Comunicação da
            UFRJ. Leciona Direção, Processos de Criação e de Linguagem
            Fotográfica. É pesquisadora (CNPq, FAPERJ) com diversos livros
            publicados. Atualmente é pesquisadora bolsista do Instituto Moreira
            Salles (IMS-Rio), que conserva o maior acervo fotográfico do país.
          </p>
        </Photographer>
        <Photographer>
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
        </Photographer>
        <Photographer>
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
        </Photographer>
        <Photographer>
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
        </Photographer>
        <Photographer>
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
        </Photographer>
        <Photographer>
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
        </Photographer>
        <BackToTopButton />
      </Main>
      <Footer />
    </Container>
  );
};

export default About;
