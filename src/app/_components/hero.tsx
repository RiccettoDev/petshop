import { FaWhatsapp } from "react-icons/fa";
import dogImage from "../../../public/imagens/bg-hero.png";
import catImage from "../../../public/imagens/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-indigo-500 text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImage}
          alt="Imagem de um cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-20 lg:hidden" />
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              data-aos="fade-down"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
            >
              Seu pet merece cuidado, carinho e atenção.
            </h1>
            <p data-aos="fade-right" className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem estar e a
              felicidade do seu amigo de quatro patas.
            </p>
            <div className="flex">
              <a
                data-aos="fade-up"
                target="_blank"
                href={`https://wa.me/559999999999?text=${encodeURIComponent(
                  "Olá, vi no site sobre serviços de petshop e gostaria de mais informações."
                )}`}
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Contato via whatts
              </a>
            </div>
            <div className="mt-8">
              <p data-aos="fade-up" className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra
              </p>
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImage}
                    alt="Imagem de um gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImage}
              alt="Imagem de um cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
