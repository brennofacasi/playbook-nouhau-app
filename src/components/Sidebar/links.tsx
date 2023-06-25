import { StaticImageData } from "next/image";

import grid from "@/icons/grid.svg";
import games from "@/icons/games.svg";
import layers from "@/icons/layers.svg";
import heart from "@/icons/heart.svg";

interface INavLinks {
  label: string;
  href: string;
  icon: StaticImageData;
}

export const links: Array<INavLinks> = [
  {
    label: "Painel",
    href: "/",
    icon: grid,
  },
  {
    label: "Jogos",
    href: "/jogos",
    icon: games,
  },
  {
    label: "Categorias",
    href: "/categories",
    icon: layers,
  },
  {
    label: "Habilidades",
    href: "/habilidades",
    icon: heart,
  },
];
