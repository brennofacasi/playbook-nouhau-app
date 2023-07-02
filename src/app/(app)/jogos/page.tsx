import { Card } from "@/components/Card";
import { GameCard } from "@/components/GameCard";
import styles from "./styles.module.scss";
import { GameCardProps } from "@/components/GameCard/types";

export default function Games() {
  const games: GameCardProps[] = [
    {
      title: "Gerentes em ação",
      players: "20",
      time: 35,
      tags: ["Estressor", "Conector"],
    },
    {
      title: "Mistérios Nouhau",
      players: "+20",
      time: 20,
      tags: ["Integrador", "Desafiador"],
    },
    {
      title: "Ganha-grana",
      players: "+10",
      time: 45,
      tags: ["Estressor"],
    },
  ];

  return (
    <>
      <Card>
        <h2>Jogos</h2>
      </Card>
      <section className={styles.row}>
        {games.map((game, index) => (
          <GameCard key={index} data={game} />
        ))}
      </section>
    </>
  );
}
