import React from 'react';
import bishop from './bishop.svg'

const typePiece = {
    "bishop": bishop
}
const ChessPiece = ({ color, pieceType }) => {
  const pieceColor = color === 'white' ? '#ffffff' : '#000000';

  return (
    <img src={typePiece[pieceType]} style={{width: 40}}/>
  );
};

export default ChessPiece;
