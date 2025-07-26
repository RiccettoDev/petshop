import Image from "next/image";
import aboutImage1 from "../../../public/imagens/about-1.png";
import aboutImage2 from "../../../public/imagens/about-2.png";
import { FaCheck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={aboutImage1}
                alt="Imagem de um cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={aboutImage2}
                alt="Imagem de um cachorro"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10 lg:mt-0">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaCheck className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <FaWhatsapp className="w-5 h-5" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className="text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <IoMdPin className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
