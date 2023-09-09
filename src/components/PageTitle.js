import React from "react";
import style from "../styles/modules/title.module.scss";

export default function PageTitle({ children }) {
  return <p className={style.title}>{children}</p>;
}
