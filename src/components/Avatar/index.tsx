import styles from "./styles.module.scss";

export const Avatar = ({ name }: { name: string }) => {
  return (
    <div className={styles.avatar__wrapper}>
      <span className={styles.avatar__name}>{name}</span>
      <div className={styles.avatar__image}></div>
    </div>
  );
};
