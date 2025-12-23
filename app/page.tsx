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
    <main>
      <section className="w-full bg-purple-950">
        <div className="m-auto font-sans w-3/4 p-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white">Bem-vindo à Fabreu</h1>
          <h2 className="text-2xl text-purple-900">
            Sua conexão de confiança para internet e entretenimento
          </h2>
          <div className="flex grid-cols-4 justify-between mt-10">
            {teste.map((item, index) => (
              <Card key={index} className="p-6 bg-white shadow-md">
                <h3 className="text-2xl font-semibold mb-2 text-purple-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
