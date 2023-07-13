import { Card } from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";
import Hero from "./hero";
import { Header } from "@/components/Header";

export default async function Home() {
  return (
    <>
      <Header.Topbar />
      <Hero />
      <Card>
        <section className={styles.recent}>
          <h5>Jogos recentes</h5>
          <div className={styles.recent__row}>
            <Image
              width={960}
              height={540}
              src='/images/empresa@2x.png'
              alt='Empresa de Participação'
            />

            <Image
              width={960}
              height={540}
              src='/images/ganha@2x.png'
              alt='Empresa de Participação'
            />

            <Image
              width={960}
              height={540}
              src='/images/misterios@2x.png'
              alt='Empresa de Participação'
            />
          </div>
        </section>
      </Card>
    </>
  );
}
