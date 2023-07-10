"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "../Avatar";
import styles from "./styles.module.scss";
import arrow from "@/icons/chevron-left.svg";

export const CardTopbar = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={styles.card__topbar}>
      {!path.includes("painel") && (
        <button className={styles.back} onClick={() => router.back()}>
          <Image src={arrow} alt='Voltar' />
        </button>
      )}
      <input type='text' className={styles.search} />
      <Avatar name='Brenno' />
    </div>
  );
};
