import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <Link href="/students/csr">
        <a>Students list CSR</a>
      </Link>
      <Link href="/students/ssr">
        <a>Students list SSR</a>
      </Link>
      <Link href="/students/ssg">
        <a>Students list SSG</a>
      </Link>
    </nav>
  );
};

export default Menu;
