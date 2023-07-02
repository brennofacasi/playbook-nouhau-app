import Image from "next/image";
import { Card } from "../Card";
import styles from "./styles.module.scss";

import users from "@/icons/user.svg";
import clock from "@/icons/clock.svg";
import { GameCardProps } from "./types";

export const GameCard = ({ data }: { data: GameCardProps }) => {
  return (
    <div className={styles.body}>
      <div className={styles.featured}></div>

      <header className={styles.header}>
        <h6 className={styles.header__title}>{data.title}</h6>
        <ul className={styles.header__info}>
          <li>
            <Image src={users} alt='Ícone de usuários' />
            {data.players} players
          </li>
          <li>
            <Image src={clock} alt='Ícone de relógio' />
            {data.time} minutos
          </li>
        </ul>
      </header>

      <footer className={styles.footer}>
        {data.tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </footer>
    </div>
  );
};
