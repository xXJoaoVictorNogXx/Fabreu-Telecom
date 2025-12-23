"use client";
import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
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
    <footer className="w-full flex p-4  justify-end bg-purple-900 text-white">
      <div className="justify-between flex w-full items-center">
        <div className="">
          <Image src="/logo.jpg" alt="Logo" width={70} height={70} />
          <p>FABREU TELECOM</p>
          <p>CNPJ: 07.146.176/0001-03</p>
          <p>Rua Coronel João Sena, 479 - Centro</p>
          <p>Presidente Dutra-MA</p>
          <p>CEP: 65.760-000</p>
        </div>
        <div>
          <h2 className="font-bold text-amber-400">CIDADES</h2>
          <p>Alto Alegre-MA</p>
          <p>Bacabal-MA</p>
          <p>Conceição do Lago Açú-MA</p>
          <p>Lago Verde-MA</p>
          <p>Presidente Dutra-MA</p>
        </div>
        <div>
          <h2 className="font-bold text-amber-400">FALE CONOSCO</h2>
          <p>Matriz - Presidente Dutra</p>
          <p>Central de Atendimento</p>
          <ul>
            <li>
              <Link href="" onClick={handleWhatsAppClick}>
                (99) 98422-7474
              </Link>
            </li>
            <li>
              <Link href="" onClick={handleWhatsAppClick}>
                0800 099-9800
              </Link>
            </li>
            <Link href="" className="flex items-center gap-2 ">
              <Mail />
              contato@fabreutelecom.net.br
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
