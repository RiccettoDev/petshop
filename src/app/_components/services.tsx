"use client";

import useEmblaCarrousel from "embla-carousel-react";
import { FaWhatsapp, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

import { services } from "@/data/services";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarrousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => {
                const Icon = item.icon; // transformar em componente JSX
                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">
                            <Icon />
                          </span>
                          <div>
                            <h3 className="font-bold text-xl my-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm select-none">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <CiClock2 className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>

                        <a
                          target="_blank"
                          href={`https://wa.me/556799998800?text=${encodeURIComponent(
                            item.linkText
                          )}`}
                          className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <FaAngleLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <FaAngleRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
