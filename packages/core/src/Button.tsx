import { ReactNode } from "react";
import { usePrevious } from "@example/utils";
import IconMapzabMeldung from "virtual:icons/examplecollection/meldung-ausblenden"
import styles from "./Button.module.scss";

export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  const prevProps = usePrevious(props);
  console.log("pre",prevProps,props)
  return <button className={styles.btn}><IconMapzabMeldung /> {props.children}</button>;
}
