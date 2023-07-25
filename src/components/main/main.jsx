import styles from "./main.module.css";
import InputElement from "../input-element/input-element";
import TableElement from "../table-element/table-element";
import { useState } from "react";

const Main = () => {
  const [wordSearch, setWordSearch] = useState("");

  return (
    <>
      <section className={styles.main}>
        <InputElement setWordSearch={setWordSearch} />
        <TableElement wordSearch={wordSearch} />
      </section>
    </>
  );
};

export default Main;
