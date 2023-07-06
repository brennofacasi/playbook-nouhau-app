import { fetchApi } from "@/services/fetch";
import Link from "next/link";
import styles from "./styles.module.scss";

import { Card } from "@/components/Card";
import { GameCard } from "@/components/GameCard";
import { GameCardProps } from "@/components/GameCard/types";

async function getGames() {
  const res = await fetchApi("game");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Games() {
  const data: GameCardProps[] = await getGames();

  if (!data) return <p>Erro</p>;

  return (
    <>
      <Card.Root>
        <Card.Avatar />
        <h2>Jogos</h2>
      </Card.Root>
      <section className={styles.row}>
        {data.map((game) => (
          <Link href={`/jogos/${game.id}`}>
            <GameCard key={game.id} data={game} />
          </Link>
        ))}
      </section>
    </>
  );
}
