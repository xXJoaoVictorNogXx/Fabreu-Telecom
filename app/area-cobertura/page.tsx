"use client";

import { MapPin } from "lucide-react";

export default function AreaCobertura() {
  return (
    <main>
      <section className="w-full bg-amber-400">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white">Área de Cobertura</h1>
          <h2 className="text-2xl text-purple-900">
            Nossa área de cobertura abrange diversas regiões para melhor
            atendê-lo.
          </h2>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-purple-900 mb-8 text-left">
            Onde você encontra a melhor internet da Região?
          </h2>
          <p>
            Presença Estratégica no MaranhãoCom sede em Bacabal, expandimos
            nossa atuação para cinco cidades vizinhas, cobrindo uma área total
            de Xkm. Combinamos presença local com eficiência regional para
            entregar o melhor serviço em diversas localidades do estado.
          </p>
          <ul className="list-disc list-inside text-purple-900 text-2xl space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Alto Alegre
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Bacabal
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Conceição do Lago Açú
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Lago Verde
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Presidente Dutra
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              São José dos Basílios-MA
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
