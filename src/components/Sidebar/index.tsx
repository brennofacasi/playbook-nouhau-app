import Image from "next/image";
import styles from "./styles.module.scss";
import joystick from "@/icons/joystick.svg";
import { links } from "./links";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.logo}>
        <Image src={joystick} alt='Joystick' />
      </div>
      <nav className={styles.nav}>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Image src={link.icon} alt={`Ícone ${link.label}`} />
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
