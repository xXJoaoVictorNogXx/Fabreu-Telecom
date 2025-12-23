"use client";
import { Card } from "@/components/ui/card";
import { ChevronRight, Gem, Handshake, Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function quemSomos() {
  const teste = [
    {
      icon: <Gem />,
      title: "Transparência e Credibilidade",
      description:
        "A transparência e credibilidade são dois grandes pilares da nossa empresa. O bom caráter na condução dos processos geram confiança e respeito entre empresa, clientes e comunidade.",
    },
    {
      Icon: <Handshake />,
      title: "Foco no Cliente",
      description:
        "O foco no cliente está presente em todos os nossos processos. Por esse motivo entendemos que o nosso papel é desenvolver produtos e serviços que atendam as expectativas e estejam de acordo com os desejos e necessidades de cada usuário de nossos serviços.",
    },
    {
      img: "",
      title: "Espírito de Colaboração",
      description:
        "A atuação cooperativa faz com que os resultados tenham maior solidez. O espírito de colaboração prevalece sobre as ações individuais fortalece as empresas, estimula e valoriza as parcerias e aumenta os resultados pessoais e do grupo.",
    },
    {
      img: "",
      title: "Espírito de Liderança",
      description:
        "O espírito de liderança permite adotar uma atitude voltada para a inovação e tecnologia de ponta como pontos de grande importância. Na sua interação com o mercado e as comunidades locais, sempre privilegiando a excelência em todas as ações.",
    },
  ];

  return (
    <main className="">
      <section className="w-full bg-amber-400">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white">Quem Somos</h1>
          <h2 className="text-2xl text-purple-900">
            Conheça um pouco sobre nossa história
          </h2>
        </div>
      </section>
      <section className="w-full">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-purple-900">Missão</h1>
          <p className="text-lg text-gray-700">
            Nossa missão é exceder as expectativas de nossos clientes, aproximar
            pessoas e garantir a qualidade através da inovação e busca da
            excelência em todas as áreas da empresa além de atuar de forma
            rentável, com responsabilidade social e permitir a comunicação e
            integração de nossos assinantes com o mundo.
          </p>
          <p className="text-lg text-gray-700">
            Fornecer serviços de internet banda larga com altíssima qualidade e
            velocidades, com o maior nível de satisfação do cliente e consumidor
            final.
          </p>
          <h1 className="text-4xl font-bold text-purple-900">Visão</h1>
          <p className="text-lg text-gray-700">
            Ser reconhecida como a melhor empresa do setor na(s) localidade(s)
            atendida(s) pelo(s) seus(s) serviço(s), destacando-se pela
            excelência dos serviços prestados, pela satisfação e desenvolvimento
            dos colaboradores e pelo foco na obtenção dos resultados esperados
            pela Diretoria das empresas
          </p>
          <h1 className="text-4xl font-bold text-purple-900">Valores</h1>
          <p className="text-lg text-gray-700">
            Nossos valores são pautados pela verdade e ética profissional que se
            traduzem no respeito e transparência na relação com o cliente, no
            comprometimento com a competência e o desenvolvimento de suas
            equipes e no orgulho de estarem construindo redes com tecnologia de
            ponta.
          </p>
          <div className="flex flex-col gap-6 items-center">
            <ul className="text-lg text-gray-700 text-center grid grid-cols-3 gap-x-12 gap-y-6 max-w-fit">
              <li className="flex items-center gap-2">
                <ChevronRight className=" text-amber-400" />
                Integridade
              </li>
              <li className="flex items-center gap-2 ">
                <ChevronRight className=" text-amber-400" />
                Inovação
              </li>

              <li className="flex items-center gap-2  ">
                <ChevronRight className=" text-amber-400" />
                Respeito ao cliente e colaboradores
              </li>
              <li className="flex items-center gap-2 ">
                <ChevronRight className=" text-amber-400" />
                Respeito à lei
              </li>

              <li className="flex items-center gap-2 ">
                <ChevronRight className=" text-amber-400" />
                Trabalho em equipe
              </li>
              <li className="flex items-center gap-2 ">
                <ChevronRight className=" text-amber-400" />
                Compartilhamento de conhecimento
              </li>
            </ul>
          </div>
          <div className="w-full grid grid-cols-4 gap-6 mt-10">
            {teste.map((item, index) => (
              <Card key={index} className="w-full text-center bg-purple-900">
                <div className="flex flex-col gap-2 p-6 items-center">
                  <h2 className="text-2xl font-semibold text-amber-400">
                    {item.title}
                  </h2>
                  <p className="text-amber-50">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
