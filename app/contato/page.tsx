"use client";

import { Card } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function contato() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "55984227474";
    const defaultMessage = "Olá, vim pelo site e gostaria de mais informações!";
    // ---------------------------------------------

    const text = defaultMessage;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <main>
      <section className="w-full bg-amber-400">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white">Contato</h1>
          <h2 className="text-2xl text-purple-900">
            Fale conosco através dos nossos vários canais de comunicação
          </h2>
        </div>
      </section>
      <section>
        <div className="m-auto font-sans w-3/4 ">
          <div className="w-full grid grid-cols-3 p-20 ">
            <Link
              href={""}
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 text-2xl "
            >
              <MessageCircle className="text-amber-400" />
              (98) 98422-7474
            </Link>
            <h2 className="flex items-center gap-2 text-2xl ">
              <Phone className="text-amber-400" />
              (99) 98463-7356
            </h2>
            <h2 className="flex items-center gap-2 text-2xl">
              <Phone className="text-amber-400" />
              0800 099-9800
            </h2>
          </div>
        </div>
        <div className="w-full text-center ">
          <h1 className="text-4xl font-bold text-purple-900">FORMULÁRIO</h1>
          <p className="text-purple-900">
            PREENCHA O FORMULÁRIO ABAIXO CORRETAMENTE UM ATENDENTE DA NOSSA
            EQUIPE ENTRARÁ EM CONTATO
          </p>
        </div>

        <Card className="m-auto font-sans w-2/5 p-10 mt-10 mb-20 bg-white">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Nome"
              className="border border-gray-400 rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 rounded-lg p-2"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="border border-gray-400 rounded-lg p-2"
            />
            <input
              type="tel"
              placeholder="Cidade/Estado"
              className="border border-gray-400 rounded-lg p-2"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="Bairro"
                className="border border-gray-400 rounded-lg p-2"
              />
              <input
                type="tel"
                placeholder="CEP"
                className="border border-gray-400 rounded-lg p-2"
              />
            </div>
            <textarea
              placeholder="Mensagem"
              className="border border-gray-400 rounded-lg p-2 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </Card>
      </section>
    </main>
  );
}

{
  /* <iframe
  className="w-full h-full border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7971916229563!2d-46.66288602498187!3d-23.554259984686736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c6dceadf%3A0x52e5f6c6c5f4e5b2!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%200131
0-100%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1616171234567!5m2!1spt-BR!2sus"
  allowFullScreen={true}
  loading="lazy"
></iframe> */
}
