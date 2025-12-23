import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const teste = [
    {
      title: "Transparência e Credibilidade",
      description:
        "A transparência e credibilidade são dois grandes pilares da nossa empresa. O bom caráter na condução dos processos geram confiança e respeito entre empresa, clientes e comunidade.",
    },
    {
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
      title: "Espírito de Liderança",
      description:
        "O espírito de liderança permite adotar uma atitude voltada para a inovação e tecnologia de ponta como pontos de grande importância. Na sua interação com o mercado e as comunidades locais, sempre privilegiando a excelência em todas as ações.",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section>
          <h2>AUTOATENDIMENTO</h2>
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
        </section>
      </main>
    </div>
  );
}
