import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
  renderSquare(i, j) {
    let id = 3 * i + j - 4; // this.props.boardWidth * (i - 1) + (j - 1);
    return (
      <Square
        key={id}
        value={this.props.squares[id]}
        onClick={() => this.props.onClick(id)}
      />
    );
  }

  render() {
    return (
      <div>
        {Array(3).fill(null).map((x, i) => {
          return (
            <div key={i} className="board-row">
              {Array(3).fill(null).map((y, j) => {
                return this.renderSquare(i + 1, j + 1);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
