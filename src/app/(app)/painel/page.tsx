import { Card } from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Card>
        <h1>
          Playbook <span className='light highlight'>Nouhau</span>
        </h1>
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

        <section>
          <h5>Habilidades</h5>

          <div className={styles.skills__row}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </Card>
    </>
  );
}
