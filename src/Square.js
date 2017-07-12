import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={props.win ? {background: '#ffa500'} : {background: '#fff'}}>
      {props.value}
    </button>
  );
}

export default Square;
