import { Card } from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Card>
        <h1>
          Playbook <span className='light highlight'>Nouhau</span>
        </h1>
        <section>
          <h4>Jogos recentes</h4>
        </section>
      </Card>
    </>
  );
}
