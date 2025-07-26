import { IconType } from "react-icons";
import { FaUserCircle, FaQuoteLeft } from "react-icons/fa";

import tutor1 from "../../public/imagens/tutor1.png";
import tutor2 from "../../public/imagens/tutor2.png";
import tutor3 from "../../public/imagens/tutor3.png";
import { StaticImageData } from "next/image";

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: StaticImageData;
  icon: IconType;
}

export const testimonials: Testimonial[] = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
    icon: FaUserCircle,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor2,
    icon: FaQuoteLeft,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila Fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor3,
    icon: FaUserCircle,
  },
];
