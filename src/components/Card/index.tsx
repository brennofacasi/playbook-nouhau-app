import styles from "./styles.module.scss";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.card__body}>{children}</div>;
};
