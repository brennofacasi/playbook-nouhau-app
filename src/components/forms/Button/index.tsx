import styles from "./styles.module.scss";

export const Button = ({ children }: { children: string }) => {
  return <button className={styles.button}>{children}</button>;
};
