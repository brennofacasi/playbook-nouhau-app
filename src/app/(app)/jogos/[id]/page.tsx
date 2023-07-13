import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import { fetchApi } from "@/services/fetch";

import styles from "./styles.module.scss";

import { Card } from "@/components/Card";

import user from "@/icons/user.svg";
import users from "@/icons/users.svg";
import clock from "@/icons/clock.svg";
import Columns from "./columns";
import { Header } from "@/components/Header";

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
      <Header.Topbar />
      <Card>
        <div className={styles.game__detail}>
          <h2>{game.title}</h2>
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
      </Card>

      <Columns>
        <div>
          <Card>
            <article className={styles.article}>
              <h3 className='highlight'>O que é?</h3>
              {HTMLReactParser(game.steps)}
            </article>
          </Card>

          <Card>
            <div className={styles.assets}>
              <h4 className='highlight'>Materiais</h4>
              <div className={styles.assets__items}>
                {game.assets.map((item: any) => (
                  <div key={item.assets.name}>{item.assets.name}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className={styles.skills}>
          {game.skills.map((item: any) => (
            <div key={item.skills.name} className={styles.skills__box}>
              {item.skills.name}
            </div>
          ))}
        </div>
      </Columns>
    </>
  );
}
