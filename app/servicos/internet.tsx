export default function internet() {
  return (
    <main>
      <section className="w-full bg-amber-400">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white">Serviço de Internet</h1>
          <h2 className="text-2xl text-purple-900">
            Conheça nossos planos de internet de alta velocidade
          </h2>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-purple-900 mb-8 text-left">
            Nossos Planos de Internet
          </h2>
          <p>
            Oferecemos uma variedade de planos de internet para atender às suas
            necessidades, desde uso residencial até soluções empresariais.
          </p>
          <ul className="list-disc list-inside text-purple-900 text-lg space-y-2">
            <li>Plano Básico: Ideal para navegação e redes sociais.</li>
            <li>Plano Avançado: Perfeito para streaming e jogos online.</li>
            <li>Plano Empresarial: Soluções robustas para o seu negócio.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
