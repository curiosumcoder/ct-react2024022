import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./_components/Counter";

export default function Home() {
  return (
    <main>
      <h1>Next.js App</h1>
      <Counter />
    </main>
  );
}
