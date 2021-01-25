import React, { ReactElement } from "react";
import "./Cell.css";

export type CellType = {
  alive: boolean;
  endGameCell?: boolean;
};

type Props = {
  cell: CellType;
};

export function Cell({ cell: { alive, endGameCell } }: Props): ReactElement {
  const headerText = endGameCell ? "Жизнь" : alive ? "Живая" : "Мёртвая";
  const subHeaderText = endGameCell
    ? alive
      ? "Ку-ку!"
      : "Тю-тю!"
    : alive
    ? "и шевелится!"
    : "или прикидывается";
  const imageClass = endGameCell
    ? alive
      ? "liveIsBorn"
      : "liveIsDead"
    : alive
    ? "alive"
    : "dead";

  return (
    <div className="cell">
      <div className="content">
        <div className={`image image-${imageClass}`} />
        <div className="text">
          <h2 className="header">{headerText}</h2>
          <p>{subHeaderText}</p>
        </div>
      </div>
    </div>
  );
}
