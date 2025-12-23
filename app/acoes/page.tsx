"use client";

import { MapPin } from "lucide-react";

export default function acoes() {
  return (
    <main>
      <section className="w-full bg-amber-400">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white">Ações Sociais</h1>
          <h2 className="text-2xl text-purple-900">
            Conheça as iniciativas da Fabreu
          </h2>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-purple-900 mb-8 text-left">
            Nossas Ações
          </h2>
          <p>
            Estamos comprometidos em fazer a diferença em nossa comunidade
            através de diversas ações sociais. Acreditamos que, ao apoiar causas
            importantes, podemos contribuir para um futuro melhor para todos.
          </p>
          <ul className="list-disc list-inside text-purple-900 text-lg space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Educação para Todos: Apoiamo projetos que visam melhorar o acesso
              à educação em comunidades carentes.
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Sustentabilidade Ambiental: Participamos de iniciativas que
              promovem a preservação do meio ambiente.
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-amber-400" />
              Inclusão Digital: Fornecemos acesso à internet para comunidades
              que não possuem essa infraestrutura.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
