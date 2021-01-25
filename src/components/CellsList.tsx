import React, { ReactElement } from "react";
import { CellType, Cell } from "./Cell";

interface Props {
  cells: CellType[];
}

export default function CellsList({ cells }: Props): ReactElement {
  return (
    <div>
      {cells.map((cell, idx) => (
        // key={idx} - так в общем случае делать нельзя
        // но здесь элементы не удаляются и не перемещаются
        // и нет уникального id-шника, генерировать лень
        <Cell cell={cell} key={idx} />
      ))}
    </div>
  );
}
