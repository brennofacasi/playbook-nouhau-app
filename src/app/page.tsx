import { Input } from "@/components/forms/Input";
import styles from "./login.module.scss";
import joystick from "@/icons/joystick.svg";
import Image from "next/image";
import { Button } from "@/components/forms/Button";

export default function Home() {
  return (
    <section className={styles.login}>
      <div className={styles.login__card}>
        <Image
          className={styles.login__image}
          width={96}
          src={joystick}
          alt='Joystick'
        />
        <h4 className={styles.login__title}>Oi. Faça seu login! ;)</h4>
        <form>
          <Input placeholder='login' />
          <Input placeholder='senha' type='password' />
          <Button>Entrar</Button>
        </form>
      </div>
    </section>
  );
}
