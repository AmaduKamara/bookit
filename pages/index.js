import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BookIT</title>
        <meta name="description" content="Generated BookIT app with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl font-semibold text-blue-500 tracking-wider">
          Nextjs BookIT App
        </h1>
      </main>
      <button className="bg-blue-500 text-white py-6 px-32 my-6 rounded-full">
        Main Div
      </button>

      <footer className={styles.footer}>
        <p>
          Powered by: <b>Dev Amkam</b>
        </p>
      </footer>
    </div>
  );
}
