import { FaCut, FaSyringe, FaTaxi, FaHotel } from "react-icons/fa";
import { IconType } from "react-icons"; // tipagem correta

export interface Service {
  title: string;
  description: string;
  duration: string;
  price: string;
  icon: IconType; // agora é um componente React, não JSX
  linkText: string;
}

export const services: Service[] = [
  {
    title: "Banho & Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: FaCut,
    linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações."
  },
  {
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: FaSyringe,
    linkText: "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações."
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: FaTaxi,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações."
  },
  {
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: FaHotel,
    linkText: "Olá, vi no site sobre Hotel para pets e gostaria de mais informações."
  },
];
