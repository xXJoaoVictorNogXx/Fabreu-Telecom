"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import path from "path";
import { cn } from "@/lib/utils";

export default function Header() {
  const Pathname = usePathname();

  return (
    <header className="w-full flex p-4  justify-end bg-purple-900">
      <div className="justify-between flex w-full items-center">
        <Image src="/logo.jpg" alt="Logo" width={70} height={70} />

        <NavigationMenu className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Link
              href={"/quem-somos"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-400",
                Pathname.startsWith("/quem-somos")
                  ? "text-amber-400"
                  : "text-muted-foreground"
              )}
            >
              Quem-Somos
            </Link>

            <Link
              href={"/planos"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-400",
                Pathname.startsWith("/planos")
                  ? "text-amber-400"
                  : "text-muted-foreground"
              )}
            >
              Planos
            </Link>

            <Link
              href={"/contato"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-400",
                Pathname.startsWith("/contato")
                  ? "text-amber-400"
                  : "text-muted-foreground"
              )}
            >
              Contato
            </Link>

            <Link
              href={"/area-cobertura"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-400",
                Pathname.startsWith("/area-cobertura")
                  ? "text-amber-400"
                  : "text-muted-foreground"
              )}
            >
              Área de Cobertura
            </Link>
            <NavigationMenuItem className=" md:block">
              <NavigationMenuTrigger className="bg-purple-900 hover">
                Serviços
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 rounded-md">
                <ul className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 text-center">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/servicos/internet-banda-larga"}>
                        Internet Banda Larga
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
                {/* <Link
                  href={"/servicos"}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-500",
                    Pathname.startsWith("/servicos")
                      ? "text-blue-500"
                      : "text-muted-foreground"
                  )}
                >
                  Serviços
                </Link> */}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Link
              href={"/acoes"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-400",
                Pathname.startsWith("/acoes")
                  ? "text-amber-400"
                  : "text-muted-foreground"
              )}
            >
              Ações
            </Link>
          </div>
        </NavigationMenu>

        <div className="items-center justify-between flex gap-4">
          <Link
            href="https://www.instagram.com/fabreutelecom?igsh=MWlmZjUwc3ZnMXkxdg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o Instagram da nossa empresa"
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              width="32" // O original de 80px é bem grande, ajuste conforme necessário
              height="32" // O original de 80px é bem grande, ajuste conforme necessário
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z"
                fill="#f8bc31"
                // Você pode alterar a cor do ícone aqui
              />
            </svg>
          </Link>
          <Link
            href="https://fabreutelecom.sgp.tsmx.com.br/accounts/central/login" // Mude para onde você quer que o ícone vá
            target="_blank" // Remova se for um link interno do site
            rel="noopener noreferrer"
            aria-label="Acessar perfil do usuário" // Mude a descrição
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Este é o path (desenho) de um ícone de User/Pessoa */}
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="#f8bc31" // A mesma cor azul do anterior
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
