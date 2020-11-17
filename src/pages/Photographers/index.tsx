import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackToTopButton from '../../components/BackToTopButton';
import Title from '../../components/Title';
import Photographer from '../../components/Photographer';

import projectLogo from '../../assets/images/project-logo.svg';

import { Container, Main, PhotographersList } from './styles';

const Photographers: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <img src={projectLogo} alt="Ecofoto, retratos da pandemia" />
        <Title>Participantes</Title>
        <PhotographersList>
          <Photographer photographerId={0} name="Ana Cristina Vieira Soares">
            “Natural do interior do Paraná, a fotografia sempre foi para mim um
            documento, arte e registro de minha existência. Sem ela não haveria
            nada que provasse que eu estive aqui.”
          </Photographer>
          <Photographer photographerId={1} name="Ariádila Matos">
            “Cearense, estudante de Biblioteconomia pela Universidade Federal do
            Ceará e de Cinema pelo Youtube. Era a fotógrafa da família mesmo
            antes de ter minha própria câmera. Durante a pandemia busquei por
            cursos online e encontrei o Ecofoto, que me propôs deixar o
            equipamento de lado e focar no olhar fotográfico.”
          </Photographer>
          <Photographer photographerId={2} name="Eva Barcellos de Jesus">
            “Sou de Colégio, zona norte do Rio de Janeiro. Não conhecia muito
            bem esse lado artístico da fotografia, e foi muito importante para
            mim, diferente e divertido, produzir a série apresentada. Posso
            dizer que tenho muito aprender, e que estou muito feliz.”
          </Photographer>
          <Photographer photographerId={3} name="Isabela Espíndola">
            “Fotógrafa e Artista Visual formada em Cinema, sou natural do Rio de
            Janeiro. Desde 2018, venho desenvolvendo trabalhos autorais sobre
            processos alternativos, com ênfase em cianotipia. Busco o
            experimentalismo e o hibridismo de técnicas em seus processos
            criativos. Sempre curiosa.”
          </Photographer>
          <Photographer
            photographerId={4}
            name="João Paulo Mendes Roza Martins"
          >
            “Sou fotógrafo há três anos, e nunca havia antes feito parte de um
            projeto/curso assim. Participar desse projeto foi sensacional:
            conhecer uma nova maneira de olhar, pensar e imaginar a sua
            fotografia como arte, como reflexo do seu pensamento, reflexo do seu
            ser.”
          </Photographer>
          <Photographer photographerId={5} name="Jully Lourenço">
            “Não tenho idade. Minha alma é antiga. Meu pensamento é à frente,
            sei lá. Nasci no interior do Estado, em Iguatu, Ceará. Moro, desde
            criança, em Fortaleza. Jornalista, atualmente curso Design de Moda
            na Universidade Federal do Ceará. Não tenho prática com a
            fotografia. Eu a reviro, por isso, bem pessoal particular. Ao
            Ecofoto, dou nova partida ao Verão Sem Sair de Casa. Quem posa é
            minha mãe. Ela, desde jovem, ama o sol. Mas o TEMPO agora é outro. O
            futuro - que chama. Nosso filtro? (De) Duralex. Cai, mas não quebra.
            Segue. Sigo. Seguimos - todos – raros.”
          </Photographer>
          <Photographer photographerId={6} name="Laiane Teles">
            “Sou baiana, pesquisadora, e mestranda em Filosofia pela
            Universidade Federal do Ceará. Eu me interesso pelas relações entre
            Filosofia, Literatura e Artes Visuais. Minhas imagens são em sua
            maioria resultados de exercícios de observação de singularidades
            cotidianas, numa tentativa de ver o mundo de forma mais sensível e
            atenta, de me relacionar com os lugares, seus espaços, cores,
            ritmos, história, memória. Este ensaio é resultado disso.”
          </Photographer>
          <Photographer photographerId={7} name="Louise P.">
            “Sou fotógrafa e atualmente vivo na cidade do Rio de Janeiro. Em
            muitos momentos durante a pandemia me dava conta de que eu talvez
            tivesse só a mim mesma. E olhar para um único rosto e um único
            reflexo por muito tempo pode ser desafiador ou até mesmo revelar
            coisas que ainda desconhecemos ou escondemos. O projeto me motivou a
            refletir e a criar a partir disso.”
          </Photographer>
          <Photographer photographerId={8} name="Marcella Sayonara">
            “Nascida em Juazeiro do Norte, Ceará, em 1995, é artista visual e
            pesquisadora. Nas vivências do workshop produzi trabalhos que
            conciliam com minhas linhas de pesquisa, que partem das relações que
            construí com pessoas que contam histórias sobre a cidade que nasci.”
          </Photographer>
          <Photographer photographerId={9} name="Mellina Conteiro">
            “Moradora de Campo Grande, bairro mais populoso do país, onde a
            pandemia nunca pareceu tão alarmante. Meu privilégio me permitiu
            viver em quarentena, mas sei que a vida continuou. Falaram de um
            novo normal, mas na rua percebo que tudo se assemelha ao que sempre
            foi.”
          </Photographer>
          <Photographer photographerId={10} name="Priscila Gomes">
            “De Fortaleza, Ceará, fotografo desde 2017. De lá para cá, tenho
            buscado uma identidade mais autoral na fotografia. Integro um
            programa formado por mulheres fotógrafas, chamado Sol para Mulheres,
            e, nessa série final, procurei refletir um pouco minha afinidade
            pela a cor e pela fotografia de rua.”
          </Photographer>
          <Photographer photographerId={11} name="Thaiane Oliveira">
            “Moro em São Gonçalo, Rio de Janeiro. Minha câmera é uma companheira
            de longa data. Apesar de eu ter a fotografia como hobby, tenho o
            desejo de estudar mais essa arte. O projeto Ecofoto, nessa edição
            remota, foi a oportunidade perfeita para que eu, finalmente, desse o
            primeiro passo. Esse processo do ciclo de criação me fez buscar
            novos ambientes, ensaiar novas possibilidades de edições e descobrir
            minhas referências visuais.”
          </Photographer>
        </PhotographersList>
        <BackToTopButton />
      </Main>
      <Footer />
    </Container>
  );
};

export default Photographers;
