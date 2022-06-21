import Head from "next/head";
import Menu from "../Menu/Menu";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Students app</title>
      </Head>
      <div className={styles.container}>
        <header className="header">
          <h1>ISDI Coders Classroom</h1>
        </header>
        <Menu />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
