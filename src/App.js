// import "../scss/FileName.scss";
import { useEffect, useState } from "react";
import "./App.scss";

export default function App() {
  const p1 = "O";
  const p2 = "X";
  const [turn, setTurn] = useState(p1); // 0 reset, 1 start
  const [win, setWin] = useState(null);
  // const [draw, setDraw] = useState(null);
  const [cls, setClass] = useState(null);
  const [pattern, setPattern] = useState([]);

  const [boxes, setBoxes] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]); // 0 reset, 1 start

  useEffect(() => {}, [cls]);
  const ifBox = (box) => {
    if (box === p1) return p1;
    if (box === p2) return p2;
  };
  const fetchBox = (s) => {
    switch (s) {
      case 1:
        const b1 = boxes[0][0];
        return ifBox(b1);
      case 2:
        const b2 = boxes[0][1];
        return ifBox(b2);
      case 3:
        const b3 = boxes[0][2];
        return ifBox(b3);
      case 4:
        const b4 = boxes[1][0];
        return ifBox(b4);
      case 5:
        const b5 = boxes[1][1];
        return ifBox(b5);
      case 6:
        const b6 = boxes[1][2];
        return ifBox(b6);
      case 7:
        const b7 = boxes[2][0];
        return ifBox(b7);
      case 8:
        const b8 = boxes[2][1];
        return ifBox(b8);
      case 9:
        const b9 = boxes[2][2];
        return ifBox(b9);
      default:
        return "";
    }
  };
  function checkWinner() {
    //all rows
    if (boxes[0][0] === turn && boxes[0][1] === turn && boxes[0][2] === turn)
      return setWin(turn), setPattern([1, 2, 3]);
    if (boxes[1][0] === turn && boxes[1][1] === turn && boxes[1][2] === turn)
      return setWin(turn), setPattern([4, 5, 6]);
    if (boxes[2][0] === turn && boxes[2][1] === turn && boxes[2][2] === turn)
      return setWin(turn), setPattern([7, 8, 9]);
    //all rows above

    //all colums
    if (boxes[0][0] === turn && boxes[1][0] === turn && boxes[2][0] === turn)
      return setWin(turn), setPattern([1, 4, 7]);
    if (boxes[0][1] === turn && boxes[1][1] === turn && boxes[2][1] === turn)
      return setWin(turn), setPattern([2, 5, 8]);
    if (boxes[0][2] === turn && boxes[1][2] === turn && boxes[2][2] === turn)
      return setWin(turn), setPattern([3, 6, 9]);
    //all colums above

    //diagonals
    if (boxes[0][0] === turn && boxes[1][1] === turn && boxes[2][2] === turn)
      return setWin(turn), setPattern([1, 5, 9]);
    if (boxes[0][2] === turn && boxes[1][1] === turn && boxes[2][0] === turn)
      return setWin(turn), setPattern([3, 5, 7]);
    //diagonals above

    if (turn === p1) setTurn(p2);
    if (turn === p2) setTurn(p1);
  }
  const clickBox = (a1, a2) => {
    if (win) return;
    if (!boxes[a1][a2]) {
      setBoxes([...boxes, (boxes[a1][a2] = turn)]);
      checkWinner(a1, a2);
    }
  };

  const resetGame = () => {
    setTurn(turn === p1 ? p2 : p1);
    setWin(null);
    setBoxes([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  return (
    <div id="global-container">
      <h1>Tic Tac Toe</h1>
      {win ? (
        <div className="won">
          {win && turn === p1 ? "Player One" : "Player 2"} Won!
        </div>
      ) : (
        <div className="turn">{turn}'s turn</div>
      )}
      {/* <div>Game stats in </div> */}
      <div className="game-container">
        <div
          onClick={() => {
            clickBox(0, 0);
            !win && setClass(1);
          }}
          className={`one ${cls === 1 && "animate "} ${
            win && pattern.includes(1) && "pattern"
          }`}
        >
          {fetchBox(1)}
        </div>
        <div
          onClick={() => {
            clickBox(0, 1);
            !win && setClass(2);
          }}
          className={`two ${cls === 2 && "animate "} ${
            win && pattern.includes(2) && "pattern"
          }`}
        >
          {fetchBox(2)}
        </div>
        <div
          onClick={() => {
            clickBox(0, 2);
            !win && setClass(3);
          }}
          className={`three ${cls === 3 && "animate "} ${
            win && pattern.includes(3) && "pattern"
          }`}
        >
          {fetchBox(3)}
        </div>
        <div
          onClick={() => {
            clickBox(1, 0);
            !win && setClass(4);
          }}
          className={`four ${cls === 4 && "animate "} ${
            win && pattern.includes(4) && "pattern"
          }`}
        >
          {fetchBox(4)}
        </div>
        <div
          onClick={() => {
            clickBox(1, 1);
            !win && setClass(5);
          }}
          className={`five ${cls === 5 && "animate "} ${
            win && pattern.includes(5) && "pattern"
          }`}
        >
          {fetchBox(5)}
        </div>
        <div
          onClick={() => {
            clickBox(1, 2);
            !win && setClass(6);
          }}
          className={`six ${cls === 6 && "animate "} ${
            win && pattern.includes(6) && "pattern"
          }`}
        >
          {fetchBox(6)}
        </div>
        <div
          onClick={() => {
            clickBox(2, 0);
            !win && setClass(7);
          }}
          className={`seven ${cls === 7 && "animate "} ${
            win && pattern.includes(7) && "pattern"
          }`}
        >
          {fetchBox(7)}
        </div>
        <div
          onClick={() => {
            clickBox(2, 1);
            !win && setClass(8);
          }}
          className={`eight ${cls === 8 && "animate "} ${
            win && pattern.includes(8) && "pattern"
          }`}
        >
          {fetchBox(8)}
        </div>
        <div
          onClick={() => {
            clickBox(2, 2);
            !win && setClass(9);
          }}
          className={`nine ${cls === 9 && "animate "} ${
            win && pattern.includes(9) && "pattern"
          }`}
        >
          {fetchBox(9)}
        </div>
      </div>

      <div onClick={() => resetGame()} className="reset-button flex-center">
        {"Reset"}
      </div>
    </div>
  );
}
