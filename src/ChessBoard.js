import React from 'react';
import './index.css';
// import Piece from './piece'

const Chessboard = () => {
    const boardRows = Array.from({ length: 8 });
    const square = ((colIndex, rowIndex) => (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black')
    return (
        <div className="chessboard">
            {boardRows.map((_, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {boardRows.map((_, colIndex) => (
                        <div
                            className={`square ${square(colIndex, rowIndex)}`}
                            key={colIndex}
                        >
                        </div>
                    ))}

                </div>
            ))}
            
        </div>
    );
};

export default Chessboard;