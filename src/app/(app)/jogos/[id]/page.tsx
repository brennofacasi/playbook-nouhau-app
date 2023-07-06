import Image from "next/image";
import { fetchApi } from "@/services/fetch";
import styles from "./styles.module.scss";

import { Card } from "@/components/Card";

import user from "@/icons/user.svg";
import users from "@/icons/users.svg";
import heart from "@/icons/heart.svg";
import clock from "@/icons/clock.svg";
import { Tag } from "@/components/Tag";
import HTMLReactParser from "html-react-parser";

async function getGame(id: string) {
  const res = await fetchApi(`game/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Game({ params }: { params: { id: string } }) {
  const game = await getGame(params.id);
  return (
    <>
      <Card.Root>
        <Card.Avatar />
        <h2>{game.title}</h2>
        <div className={styles.game__detail}>
          <ul>
            <li>
              <Image src={clock} alt='Ícone de relógio' />
              {game.time} minutos
            </li>
            <li>
              <Image src={user} alt='Ícone de usuário' />
              Até {game.maxGroups} {game.maxGroups > 1 ? "grupos" : "grupo"}
            </li>
            <li>
              <Image src={users} alt='Ícone de usuários' /> Até{" "}
              {game.maxPlayers} players
            </li>
          </ul>
        </div>
      </Card.Root>

      <section className={styles.row}>
        <Card.Root>
          <article className={styles.article}>
            <h3 className='highlight'>O que é?</h3>
            {HTMLReactParser(game.steps)}
          </article>
        </Card.Root>

        <div className={styles.skills}>
          {game.skills.map((item: any) => (
            <div key={item.skills.name} className={styles.skills__box}>
              {item.skills.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
