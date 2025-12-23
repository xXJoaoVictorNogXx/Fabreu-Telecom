"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

export default function planos() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5599988229457";
    const defaultMessage = "Olá, vim pelo site e gostaria de mais informações!";
    // ---------------------------------------------

    const text = defaultMessage;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.location.href = whatsappUrl;
  };

  const priceStyles = {
    // O container roxo que alinha tudo na base
    wrapper:
      "w-full  py-2 flex justify-center items-baseline text-white font-sans",

    // O "R$" e o "/mês" (menores)
    smallText: "text-2xl font-black tracking-tighter",

    // O valor numérico (gigante)
    bigText: "text-6xl font-black tracking-tighter leading-none mx-1",
  };

  const teste = [
    {
      img: "",
      title: "Transparência e Credibilidade",
      Benefits:
        "Wifi Premium <br/> Atendimento Humanizado <br/> Internet fibra óptica <br/> Suporte Personalizado",
      price: "R$95,00",
      contact: "Inclui gratuitamente",
    },
    {
      img: "",
      title: "Foco no Cliente",
      Benefits:
        "Wifi Premium <br/> Atendimento Humanizado <br/> Internet fibra óptica <br/> Suporte Personalizado",
      price: "R$125,00",
      contact: "Inclui gratuitamente",
    },
  ];

  return (
    <main>
      <section className="w-full bg-amber-400">
        <div className="max-w-7xl mx-auto py-20 px-6 flex flex-col gap-6">
          <h1 className="text-6xl font-bold text-amber-50">Planos e Preços</h1>
          <p className="text-2xl text-purple-900">
            Conheça nossos planos e preços especiais e assine agora mesmo
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-purple-900 text-center mt-10">
            PLANOS PARA VOCÊ
          </h1>
          <p>SEMPRE UM PLANO PERFEITO PARA VOCÊ, SEJA QUAL FOR O SEU PERFIL</p>
        </div>
        <div className="max-w-7xl mx-auto p-20 px-4 grid grid-cols-2 md:grid-cols-2 gap-6">
          {teste.map((plano, index) => (
            <Card
              key={index}
              className="border-4 rounded-3xl border-amber-400 p-6 shadow-lg bg-purple-900 text-center"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 text-amber-50">
                  {plano.title}
                </h2>
              </div>
              <p
                className="text-lg text-amber-50 mb-4"
                dangerouslySetInnerHTML={{ __html: plano.Benefits || "" }}
              ></p>
              <div className={priceStyles.wrapper}>
                <span className={priceStyles.smallText}>R$</span>
                <span className={priceStyles.bigText}>{plano.price}</span>
                <span className={priceStyles.smallText}>/mês</span>
              </div>
              <hr className="border-t border-white my-6 w-full" />
              <p className="text-amber-50">{plano.contact}</p>
              <Button
                variant="secondary"
                className="mt-6 bg-amber-400 text-purple-900 font-bold hover:bg-amber-500"
                onClick={handleWhatsAppClick}
              >
                Quero esse plano!
              </Button>
            </Card>
          ))}
        </div>
        s
      </section>
    </main>
  );
}
