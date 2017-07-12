import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
  renderSquare(i, j) {
    let id = 3 * i + j - 4; // this.props.boardWidth * (i - 1) + (j - 1);
    return (
      <Square
        value={this.props.squares[id]}
        onClick={() => this.props.onClick(id)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
          {this.renderSquare(1, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
          {this.renderSquare(2, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 1)}
          {this.renderSquare(3, 2)}
          {this.renderSquare(3, 3)}
        </div>
      </div>
    );
  }
}

export default Board;
