import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { CellType } from "./components/Cell";
import CellsList from "./components/CellsList";

function App() {
  const [cells, setCells] = useState<CellType[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCreateCell = () => {
    if (gameOver) {
      setCells([]);
      setGameOver(false);
    } else {
      const newCells: CellType[] = [
        { alive: Math.random() >= 0.5 ? true : false },
      ];
      if (newCells[0].alive) {
        if (cells.length > 0 && cells[cells.length - 1].alive) {
          setGameOver(true);
          newCells.push({ alive: true, endGameCell: true });
        }
      } else {
        if (
          cells.length > 1 &&
          !cells[cells.length - 1].alive &&
          !cells[cells.length - 2].alive
        ) {
          setGameOver(true);
          newCells.push({ alive: false, endGameCell: true });
        }
      }

      setCells([...cells, ...newCells]);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [cells]);

  return (
    <div className="App">
      <div className="App-content">
        <header className="App-header">
          <h1 className="App-headerText">Клеточное наполнение</h1>
        </header>
        <div className="App-container" ref={scrollRef}>
          <CellsList cells={cells} />
          <div className="App-container-emptySpace" />
        </div>
      </div>
      <button onClick={handleCreateCell} className="App-createCell">
        {gameOver ? "Начать сначала" : "СОТВОРИТЬ"}
      </button>
    </div>
  );
}

export default App;
