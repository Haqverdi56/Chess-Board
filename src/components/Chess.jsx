import React, { useState } from 'react'
import './Chessboard.css';


function Chess() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [pieces, setPieces] = useState([
    { position: 'a8' },
    { position: 'b8' },
    { position: 'c8' },
    { position: 'd8' },
    { position: 'e8' },
    { position: 'f8' },
    { position: 'g8' },
    { position: 'h8' },
    { position: 'a7' },
    { position: 'b7' },
    { position: 'c7' },
    { position: 'd7' },
    { position: 'e7' },
    { position: 'f7' },
    { position: 'g7' },
    { position: 'h7' },
    { position: 'a1' },
    { position: 'b1' },
    { position: 'c1' },
    { position: 'd1' },
    { position: 'e1' },
    { position: 'f1' },
    { position: 'g1' },
    { position: 'h1' },
    { position: 'a2' },
    { position: 'b2' },
    { position: 'c2' },
    { position: 'd2' },
    { position: 'e2' },
    { position: 'f2' },
    { position: 'g2' },
    { position: 'h2' },
  ]);

  function handleClick(square) {
    setSelectedPiece(square)
    console.log(square);
  }
    
  return (
    <div className='chess-div'>
      <table className="chessboard">
      <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
            <tr key={row}>
              {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((col) => {
                const isDarkSquare = (row + col.charCodeAt(0)) % 2 !== 0;
                const piece = pieces.find((p) => p.position === col + row);
                // console.log();
                return (
                  <td
                    key={col}
                    style={{backgroundColor:selectedPiece == col+row ? 'red' : null, pointerEvents:isDarkSquare ? 'none' : null}}
                    className={isDarkSquare ? 'dark-square' : 'light-square'}
                    onClick={() => handleClick(col+row)}
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