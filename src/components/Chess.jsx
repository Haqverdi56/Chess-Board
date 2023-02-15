import React, { useState } from 'react'
import './Chessboard.css';


function Chess() {
  const [pieces, setPieces] = useState([
    { type: 'rook', position: 'a8' },
    { type: 'knight', position: 'b8' },
    { type: 'bishop', position: 'c8' },
    { type: 'queen', position: 'd8' },
    { type: 'king', position: 'e8' },
    { type: 'bishop', position: 'f8' },
    { type: 'knight', position: 'g8' },
    { type: 'rook', position: 'h8' },
    { type: 'pawn', position: 'a7' },
    { type: 'pawn', position: 'b7' },
    { type: 'pawn', position: 'c7' },
    { type: 'pawn', position: 'd7' },
    { type: 'pawn', position: 'e7' },
    { type: 'pawn', position: 'f7' },
    { type: 'pawn', position: 'g7' },
    { type: 'pawn', position: 'h7' },
    { type: 'rook', position: 'a1' },
    { type: 'knight', position: 'b1' },
    { type: 'bishop', position: 'c1' },
    { type: 'queen', position: 'd1' },
    { type: 'king', position: 'e1' },
    { type: 'bishop', position: 'f1' },
    { type: 'knight', position: 'g1' },
    { type: 'rook', position: 'h1' },
    { type: 'pawn', position: 'a2' },
    { type: 'pawn', position: 'b2' },
    { type: 'pawn', position: 'c2' },
    { type: 'pawn', position: 'd2' },
    { type: 'pawn', position: 'e2' },
    { type: 'pawn', position: 'f2' },
    { type: 'pawn', position: 'g2' },
    { type: 'pawn', position: 'h2' },
  ]);

  function handleClick(square) {
    // Handle the user's click on a square
    // Move the selected piece to the new square
    console.log(square);
  }
    
  return (
    <div>
      <table className="chessboard">
      <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
            <tr key={row} onClick={(e) => console.log(e.target)}>
              {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((col) => {
                const isDarkSquare = (row + col.charCodeAt(0)) % 2 !== 0;
                const piece = pieces.find((p) => p.position === col + row);

                return (
                  <td
                    key={col}
                    className={isDarkSquare ? 'dark-square' : 'light-square'}
                    onClick={() => handleClick(col + row)}
                  >
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Chess

// col - herfler
// row - reqemler